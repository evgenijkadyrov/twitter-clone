import { useSelector } from 'react-redux';
import { TweetComponent } from '@components/Content/Tweet';

import { useFetchTweets } from '@/hooks/useFetchTweets';
import { userSelector } from '@/store/selectors';
import { HeightSizes } from '@/style/sizes';

import { Title, TweetWrapper } from './tweets.styled';

export const TweetsBlock = () => {
	const { id } = useSelector(userSelector);
	const { tweets } = useFetchTweets(id);

	return (
		<TweetWrapper>
			<Title>Tweets</Title>
			{tweets.map((tweet) => (
				<TweetComponent key={tweet.id} tweet={tweet} imageHeight={HeightSizes.h450} />
			))}
		</TweetWrapper>
	);
};
