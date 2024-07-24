import { TweetComponent } from '@components/Content/Tweet';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';

import { HeightSizes } from '@/style/sizes';

import { Title, TweetWrapper } from './tweets.styled';

interface TweetsBlockProps {
	tweets: TweetResponse[];
}

export const TweetsBlock = ({ tweets }: TweetsBlockProps) => (
	<TweetWrapper>
		<Title>Tweets</Title>
		{tweets.map((tweet) => (
			<TweetComponent key={tweet.id} tweet={tweet} imageHeight={HeightSizes.h450} />
		))}
	</TweetWrapper>
);
