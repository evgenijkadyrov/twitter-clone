import { useState } from 'react';
import { TweetComponent } from '@components/Content/Tweet';
import { PageNav } from '@components/PageNav';

import { CreatingTweetBlock } from '@/components';
import { useFetchTweetsByUser } from '@/hooks/useFetchTweetsByUser';
import { HeightSizes } from '@/style/sizes';

export const Feed = () => {
	const [tweet, setTweet] = useState('');

	const { tweets } = useFetchTweetsByUser(null);

	return (
		<>
			<PageNav />
			<CreatingTweetBlock tweetText={tweet} setTweet={setTweet} />
			{tweets.map((tweet) => (
				<TweetComponent key={tweet.id} tweet={tweet} imageHeight={HeightSizes.h450} />
			))}
		</>
	);
};
