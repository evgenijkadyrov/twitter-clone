import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthorInfoComponent } from '@components/Content/AuthorComponent';
import { Avatar } from '@components/Content/CreatingTweetBlock/creatingTweetBlock.styled';
import { LikesComponent } from '@components/Content/LikesBlock';
import { arrayRemove, arrayUnion, collection, doc, Timestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';

import { TweetResponse } from '@/components';
import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { db, storage } from '@/firebase';
import { handleFirebaseError } from '@/helpers/firebaseErrors';
import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';
import { userSelector } from '@/store/selectors';

import { Settings, TweetContainer, TweetImage, TweetText, TweetWrapper } from './tweet.styled';

interface TweetComponentProps {
	tweet: TweetResponse;
	handleClickTweet?: () => void;
	imageHeight: string;
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
export const TweetComponent = ({ tweet, handleClickTweet, imageHeight }: TweetComponentProps) => {
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
	const dispatch = useAppDispatch();
	const formatDate = formattedDate(createdAt);
	const handleLikeClick = async (): Promise<void> => {
		try {
			const tweetRef = doc(collection(db, 'tweets'), tweetId);

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
			dispatch(
				notificationActions.showError(
					handleFirebaseError(
						error,
						ErrorsResponseCode.INVALID_CREDENTIALS,
						NotificationMessages.ERROR_LOGIN
					)
				)
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
				<AuthorInfoComponent
					authorName={authorName}
					authorNickname={authorNickname}
					createdAt={formatDate}
				/>
				<TweetText>{tweetContent}</TweetText>
				{imageUrl && <TweetImage background_url={imageUrl} height={imageHeight} />}
				<LikesComponent
					isLiked={liked}
					countLikes={likedList.length}
					handleLikeClick={handleLikeClick}
				/>
			</TweetWrapper>
			{isOwner && <Settings>...</Settings>}
		</TweetContainer>
	);
};
