import { useNavigate } from 'react-router-dom';
import { TweetComponent } from '@components/Content/Tweet';

import { TweetResponse } from '@/components';
import { Paths } from '@/constants/routerPaths';

import { SearchItemProps } from './searchItem.interfaces';

export const SearchItem = ({ data, clearSearch }: SearchItemProps) => {
	const navigate = useNavigate();

	const tweetClickHandler = (): void => {
		navigate(`${Paths.TWEET}/${data.id}`);
		clearSearch();
	};

	return (
		<div
			onClick={tweetClickHandler}
			tabIndex={0}
			role="button"
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					tweetClickHandler();
				}
			}}
		>
			<TweetComponent tweet={data as TweetResponse} />;
		</div>
	);
};