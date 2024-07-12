import likeIcon from '@/assets/icons/like.svg';
import activeLike from '@/assets/icons/like-fill.svg';
import { tweets } from '@/constants/mocTweets';

import { Avatar } from '../CreatingTweetBlock/creatingTweetBlock.styled';

import {
	AuthorInfo,
	AuthorName,
	AuthorNickName,
	LikeCount,
	LikeIcon,
	LikesBlock,
	Settings,
	Title,
	Tweet,
	TweetContainer,
	TweetCreatedAt,
	TweetText,
	TweetWrapper,
} from './tweets.styled';

interface TweetBlockProps {
	avatarImage: string | null | undefined;
	tweetImage?: string | null | undefined;
}

export const TweetsBlock = ({ avatarImage, tweetImage }: TweetBlockProps) => {
	const handleLikeClick = () => {};
	return (
		<TweetWrapper>
			<Title>Tweets</Title>
			{tweets.map(
				({ authorName, authorNickname, createdAt, tweetContent, isLiked, countLikes, tweetId }) => (
					<TweetContainer key={tweetId}>
						<Avatar background_url={avatarImage as string} />

						<Tweet>
							<AuthorInfo>
								<AuthorName>{authorName}</AuthorName>
								<AuthorNickName>{authorNickname}</AuthorNickName>
								<TweetCreatedAt>{createdAt}</TweetCreatedAt>
							</AuthorInfo>
							<TweetText>{tweetContent}</TweetText>
							{tweetImage && <img src={tweetImage} alt="imageTweet" />}
							<LikesBlock>
								<LikeIcon
									src={isLiked ? activeLike : likeIcon}
									alt="activeLike"
									onClick={handleLikeClick}
									loading="lazy"
								/>
								<LikeCount>{countLikes || 0}</LikeCount>
							</LikesBlock>
						</Tweet>
						<Settings>...</Settings>
					</TweetContainer>
				)
			)}
		</TweetWrapper>
	);
};
