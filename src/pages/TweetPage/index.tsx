import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TweetComponent } from '@components/Content/Tweet';
import { PageNav } from '@components/PageNav';

import { useFetchTweetById } from '@/hooks/useFetchTweetById';
import { HeightSizes } from '@/style/sizes';

export const TweetPage: FC = () => {
	const { id } = useParams();
	const tweet = useFetchTweetById(id as string);
	return (
		<>
			<PageNav />
			{id && tweet && (
				<TweetComponent key={tweet.id} tweet={tweet} imageHeight={HeightSizes.h450} />
			)}
		</>
	);
};
