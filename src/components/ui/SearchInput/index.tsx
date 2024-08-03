import { memo, SyntheticEvent } from 'react';
import searchIcon from '@assets/icons/search.svg';

import { SearchPath, SearchPlaceholder } from '@/constants/textConstant';

import { Container, Icon, SearchInputContainer } from './searchInput.styled';

interface SearchInputProps {
	searchPath: string;
	searchValue: string;
	onChangeHandler: (e: SyntheticEvent) => void;
}

export const SearchInput = memo(
	({ searchPath, searchValue, onChangeHandler }: SearchInputProps) => {
		const configPlaceholder = (value: string): string =>
			value === SearchPath.users.toString() ? SearchPlaceholder.users : SearchPlaceholder.tweets;
		return (
			<Container>
				<Icon src={searchIcon} alt="search" />
				<SearchInputContainer
					placeholder={configPlaceholder(searchPath)}
					value={searchValue}
					onChange={onChangeHandler}
				/>
			</Container>
		);
	}
);
