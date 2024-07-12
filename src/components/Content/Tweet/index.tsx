import { AuthorInfoComponent } from '@components/Content/AuthorComponent';
import { Avatar } from '@components/Content/CreatingTweetBlock/creatingTweetBlock.styled';
import { LikesComponent } from '@components/Content/LikesBlock';

import { Tweet } from '@/constants/mocTweets';

import { Settings, TweetContainer, TweetImage, TweetText, TweetWrapper } from './tweet.styled';

interface TweetComponentProps {
	tweet: Tweet;
	avatarImage: string | null | undefined;
}
export const TweetComponent = ({ tweet, avatarImage }: TweetComponentProps) => {
	const { authorName, authorNickname, createdAt, tweetContent, isLiked, countLikes, tweetImage } =
		tweet;
	const handleLikeClick = () => {};

	return (
		<TweetContainer>
			<Avatar background_url={avatarImage as string} />
			<TweetWrapper>
				<AuthorInfoComponent
					authorName={authorName}
					authorNickname={authorNickname}
					createdAt={createdAt}
				/>
				<TweetText>{tweetContent}</TweetText>
				{tweetImage && <TweetImage src={tweetImage} alt="imageTweet" />}
				<LikesComponent
					isLiked={isLiked}
					countLikes={countLikes}
					handleLikeClick={handleLikeClick}
				/>
			</TweetWrapper>
			<Settings>...</Settings>
		</TweetContainer>
	);
};
