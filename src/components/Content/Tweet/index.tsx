import { ChangeEvent, KeyboardEvent, KeyboardEventHandler, memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthorInfo } from '@components/Content/AuthorInfo';
import { Avatar } from '@components/Content/CreatingTweetBlock/creatingTweetBlock.styled';
import { Likes } from '@components/Content/LikesBlock';
import { SettingsBlock } from '@components/Settings';

import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { calculateIfIsLiked } from '@/helpers/calculateIfIsLiked';
import { formattedDate } from '@/helpers/formattedTimestampToDate';
import useTweetImageURL from '@/hooks/useConvertImageUrl';
import { useNotification } from '@/hooks/useNotification';
import useUpdateLike from '@/hooks/useUpdateLike';
import { TweetService } from '@/services/tweetService';
import { userSelector } from '@/store/selectors';

import { TweetComponentProps } from './tweet.interface';
import {
	TextAreaEditable,
	TweetContainer,
	TweetImage,
	TweetText,
	TweetWrapper,
} from './tweet.styled';

export const TweetComponent = memo(
	({ tweet, handleClickTweet, imageHeight, showTweetImage = true }: TweetComponentProps) => {
		const {
			createdAt,
			authorName,
			authorNickname = 'unknown',
			tweetContent,
			avatarImage,
			likedList,
			tweetImage,
			userId,
			id: tweetId,
		} = tweet;
		const [isOwner, setIsOwner] = useState(false);
		const [imageUrl, setImageUrl] = useState<string>('');
		const [newTweetContent, setNewTweetContent] = useState(tweetContent);
		const [showModalEdit, setShowModalEdit] = useState(false);

		const { id } = useSelector(userSelector);
		const formatDate = formattedDate(createdAt);

		const isLiked = calculateIfIsLiked(likedList, id as string);
		const handleLikeClick = useUpdateLike({ likedList, tweetId });
		useEffect(() => {
			setIsOwner(userId === id);
		}, [tweet, id, userId]);
		const { showSuccessNotification, showErrorNotification } = useNotification();
		useTweetImageURL(tweetImage, setImageUrl);

		const handleDeleteTweet = async () => {
			try {
				await TweetService.deleteTweet(tweetId);
				showSuccessNotification(NotificationMessages.SUCCESS_TWEET_DELETE);
			} catch (error) {
				showErrorNotification(
					error,
					ErrorsResponseCode.ERROR_DELETE_TWEET,
					NotificationMessages.ERROR_TWEET_DELETE
				);
			}
		};
		const handleEdit = async () => {
			try {
				await TweetService.updateTweetInfo(tweetId, newTweetContent, userId);
				setShowModalEdit(false);
				showSuccessNotification(NotificationMessages.SUCCESS_TWEET_UPDATE);
			} catch (error) {
				showErrorNotification(
					error,
					ErrorsResponseCode.UNKNOWN_ERROR,
					NotificationMessages.ERROR_TWEET_UPDATE
				);
			}
		};
		const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) =>
			setNewTweetContent(e.target.value);

		const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = async (
			e: KeyboardEvent<HTMLTextAreaElement>
		) => {
			if (e.code === 'Enter') {
				try {
					await handleEdit();
				} catch (error) {
					console.log(error);
				}
			} else if (e.code === 'Escape') {
				setShowModalEdit(false);
			}
		};
		const handleFocusOut = () => {
			setShowModalEdit(false);
		};

		return (
			<TweetContainer onClick={handleClickTweet}>
				<Avatar background_url={avatarImage} />
				<TweetWrapper>
					<AuthorInfo
						authorName={authorName}
						authorNickname={authorNickname}
						createdAt={formatDate}
					/>
					{showModalEdit ? (
						<TextAreaEditable
							value={newTweetContent}
							onChange={handleChangeTextArea}
							onKeyDown={handleKeyDown}
							onBlur={handleFocusOut}
						/>
					) : (
						<TweetText>{tweetContent}</TweetText>
					)}
					{imageUrl && showTweetImage && (
						<TweetImage background_url={imageUrl} height={imageHeight} />
					)}
					<Likes
						isLiked={isLiked}
						countLikes={likedList?.length}
						handleLikeClick={handleLikeClick}
					/>
				</TweetWrapper>
				{isOwner && (
					<SettingsBlock
						handleDeleteTweet={handleDeleteTweet}
						handleEdit={handleEdit}
						newTweetContent={newTweetContent}
						setShowModalEdit={setShowModalEdit}
						showModalEdit={showModalEdit}
					/>
				)}
			</TweetContainer>
		);
	}
);
