import { useNavigate } from 'react-router-dom';
import { TweetComponent } from '@components/Content/Tweet';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';
import { TweetWrapper } from '@components/SearchBar/SearchItem/searchItem.styled';

import { Paths } from '@/constants/routerPaths';
import { HeightSizes } from '@/style/sizes';

import { SearchItemProps } from './searchItem.interfaces';

export const SearchItem = ({ data, clearSearch }: SearchItemProps) => {
	const navigate = useNavigate();

	const tweetClickHandler = (): void => {
		navigate(`${Paths.TWEET}/${data.id}`);
		clearSearch();
	};

	return (
		<TweetWrapper
			onClick={tweetClickHandler}
			tabIndex={0}
			role="button"
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					tweetClickHandler();
				}
			}}
		>
			<TweetComponent
				tweet={data as TweetResponse}
				imageHeight={HeightSizes.h150}
				showTweetImage={false}
			/>
		</TweetWrapper>
	);
};
