import { AuthorInfoComponent } from '@components/Content/AuthorComponent';
import { Avatar } from '@components/Content/CreatingTweetBlock/creatingTweetBlock.styled';
import { LikesComponent } from '@components/Content/LikesBlock';
import { Timestamp } from 'firebase/firestore';

import { Tweet } from '@/constants/mocTweets';

import { Settings, TweetContainer, TweetImage, TweetText, TweetWrapper } from './tweet.styled';

interface TweetComponentProps {
	tweet: Tweet;
	avatarImage: string | null | undefined;
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

export const TweetComponent = ({ tweet, avatarImage }: TweetComponentProps) => {
	const { createdAt, authorName, authorNickname, tweetContent, likedList, tweetImage } = tweet;

	const formatDate = formattedDate(createdAt);
	const handleLikeClick = () => {};

	return (
		<TweetContainer>
			<Avatar background_url={avatarImage as string} />
			<TweetWrapper>
				<AuthorInfoComponent
					authorName={authorName}
					authorNickname={authorNickname}
					createdAt={formatDate}
				/>
				<TweetText>{tweetContent}</TweetText>
				{tweetImage && <TweetImage src={tweetImage} alt="imageTweet" />}
				<LikesComponent
					isLiked={likedList.some((el) => el === '2')}
					countLikes={likedList.length}
					handleLikeClick={handleLikeClick}
				/>
			</TweetWrapper>
			<Settings>...</Settings>
		</TweetContainer>
	);
};
