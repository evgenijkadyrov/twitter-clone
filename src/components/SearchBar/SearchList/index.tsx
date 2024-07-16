import { memo } from 'react';
import { SearchItem } from '@components/SearchBar/SearchItem';

import { SearchListProps } from './searchList.interfaces';

export const SearchList = memo<SearchListProps>(({ tweetItems, clearSearch }) => (
	<>
		{tweetItems.map((data) => (
			<SearchItem data={data} key={data.id} clearSearch={clearSearch} />
		))}
	</>
));
