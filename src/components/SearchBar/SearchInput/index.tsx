import { SyntheticEvent, useState } from 'react';
import { SearchList } from '@components/SearchBar/SearchList';

import searchIcon from '@/assets/icons/search.svg';

import { Aside, Container, Icon, SearchBarContainer, Title } from './searchInput.styled';

export const SearchInput = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const onChangeHandler = (e: SyntheticEvent) => {
		const target = e.target as HTMLInputElement;
		setSearchValue(target.value);
	};
	const clearSearch = (): void => {
		setSearchValue('');
	};
	return (
		<Aside>
			<Container>
				<Icon src={searchIcon} alt="search" />
				<SearchBarContainer
					placeholder="Search Twitter"
					value={searchValue}
					onChange={onChangeHandler}
				/>
			</Container>
			{!!searchValue && (
				<>
					<Title>Search Results</Title>
					<SearchList searchValue={searchValue} clearSearch={clearSearch} />
				</>
			)}
		</Aside>
	);
};
