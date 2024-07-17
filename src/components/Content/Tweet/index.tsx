import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthorInfoComponent } from '@components/Content/AuthorComponent';
import { Avatar } from '@components/Content/CreatingTweetBlock/creatingTweetBlock.styled';
import { LikesComponent } from '@components/Content/LikesBlock';
import { Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';

import { TweetResponse } from '@/components';
import { storage } from '@/firebase';
import { userSelector } from '@/store/selectors';

import { Settings, TweetContainer, TweetImage, TweetText, TweetWrapper } from './tweet.styled';

interface TweetComponentProps {
	tweet: TweetResponse;
	handleClickTweet?: () => void;
	avatarImage?: string | null | undefined;
}

const formattedDate = (createdAt: Timestamp): string => {
	try {
		const date = createdAt.toDate();
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
		});
	} catch (error) {
		return '11.11';
	}
};

export const TweetComponent = ({ tweet, avatarImage, handleClickTweet }: TweetComponentProps) => {
	const { createdAt, authorName, authorNickname, tweetContent, likedList, tweetImage, userId } =
		tweet;
	const [isOwner, setIsOwner] = useState(false);
	const [imageUrl, setImageUrl] = useState<string>('');
	const { id } = useSelector(userSelector);
	const formatDate = formattedDate(createdAt);
	const handleLikeClick = () => {};
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
			{avatarImage !== null && <Avatar background_url={avatarImage as string} />}
			<TweetWrapper>
				<AuthorInfoComponent
					authorName={authorName}
					authorNickname={authorNickname}
					createdAt={formatDate}
				/>
				<TweetText>{tweetContent}</TweetText>
				{imageUrl && <TweetImage src={imageUrl} alt="imageTweet" />}
				<LikesComponent
					isLiked={likedList.some((el) => el === '2')}
					countLikes={likedList.length}
					handleLikeClick={handleLikeClick}
				/>
			</TweetWrapper>
			{isOwner && <Settings>...</Settings>}
		</TweetContainer>
	);
};
