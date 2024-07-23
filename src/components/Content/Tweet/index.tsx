import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthorInfo } from '@components/Content/AuthorInfo';
import { Avatar } from '@components/Content/CreatingTweetBlock/creatingTweetBlock.styled';
import { Likes } from '@components/Content/LikesBlock';

import { calculateIfIsLiked } from '@/helpers/calculateIfIsLiked';
import useTweetImageURL from '@/helpers/convertImageUrl';
import { formattedDate } from '@/helpers/formattedTimestampToDate';
import useUpdateLike from '@/hooks/useUpdateLike';
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
		const formatDate = formattedDate(createdAt);

		const isLiked = calculateIfIsLiked(likedList, id as string);
		const handleLikeClick = useUpdateLike({ likedList, tweetId, id });
		console.log('ISLIKE', likedList, id);
		useEffect(() => {
			setIsOwner(userId === id);
		}, [tweet, id, userId]);

		useTweetImageURL(tweetImage, setImageUrl);
		return (
			<TweetContainer onClick={handleClickTweet}>
				<Avatar background_url={avatarImage} />
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
					<Likes
						isLiked={isLiked}
						countLikes={likedList?.length}
						handleLikeClick={handleLikeClick}
					/>
				</TweetWrapper>
				{isOwner && <Settings>...</Settings>}
			</TweetContainer>
		);
	}
);
