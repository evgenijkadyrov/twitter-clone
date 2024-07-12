import { TweetComponent } from '@components/Content/Tweet';

import { tweets } from '@/constants/mocTweets';

import { Title, TweetWrapper } from './tweets.styled';

interface TweetBlockProps {
	avatarImage: string | null | undefined;
}

export const TweetsBlock = ({ avatarImage }: TweetBlockProps) => (
	<TweetWrapper>
		<Title>Tweets</Title>
		{tweets.map((tweet) => (
			<TweetComponent key={tweet.tweetId} tweet={tweet} avatarImage={avatarImage} />
		))}
	</TweetWrapper>
);
