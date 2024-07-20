import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthorInfo } from '@components/Content/AuthorInfo';
import { Avatar } from '@components/Content/CreatingTweetBlock/creatingTweetBlock.styled';
import { Likes } from '@components/Content/LikesBlock';
import { arrayRemove, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';

import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { DbCollection } from '@/constants/textConstant';
import { db, storage } from '@/firebase';
import { formattedDate } from '@/helpers/formattedTimestampToDate';
import { useNotification } from '@/hooks/useNotification';
import { userSelector } from '@/store/selectors';

import { TweetComponentProps } from './tweet.interface';
import { Settings, TweetContainer, TweetImage, TweetText, TweetWrapper } from './tweet.styled';

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
		const { id } = useSelector(userSelector);
		const [liked, setLiked] = useState(likedList.some((el) => el === id));
		const formatDate = formattedDate(createdAt);
		const { showErrorNotification } = useNotification();

		const handleLikeClick = async (): Promise<void> => {
			try {
				const tweetRef = doc(collection(db, DbCollection.tweets), tweetId);

				if (liked) {
					await updateDoc(tweetRef, {
						likedList: arrayRemove(userId),
					});
					setLiked(false);
				} else {
					await updateDoc(tweetRef, {
						likedList: arrayUnion(userId),
					});

					setLiked(true);
				}
			} catch (error: unknown) {
				showErrorNotification(
					error,
					ErrorsResponseCode.INVALID_CREDENTIALS,
					NotificationMessages.ERROR_UPDATE_LIKE
				);
			}
		};

		useEffect(() => {
			setIsOwner(userId === id);
		}, [tweet, id, userId]);

		useEffect(() => {
			if (tweetImage) {
				getDownloadURL(ref(storage, tweetImage))
					.then((url) => {
						setImageUrl(url);
					})
					.catch(() => {});
			}
		}, [tweetImage]);
		return (
			<TweetContainer onClick={handleClickTweet}>
				{avatarImage && <Avatar background_url={avatarImage} />}
				<TweetWrapper>
					<AuthorInfo
						authorName={authorName}
						authorNickname={authorNickname}
						createdAt={formatDate}
					/>
					<TweetText>{tweetContent}</TweetText>
					{imageUrl && showTweetImage && (
						<TweetImage background_url={imageUrl} height={imageHeight} />
					)}
					<Likes isLiked={liked} countLikes={likedList.length} handleLikeClick={handleLikeClick} />
				</TweetWrapper>
				{isOwner && <Settings>...</Settings>}
			</TweetContainer>
		);
	}
);
