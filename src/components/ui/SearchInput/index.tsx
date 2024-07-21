import { SyntheticEvent } from 'react';
import searchIcon from '@assets/icons/search.svg';

import { configPlaceholder } from '@/helpers/configireSearchPlaceholder';

import { Container, Icon, SearchBarContainer } from './searchInput.styled';

interface SearchInputProps {
	searchPath: string;
	searchValue: string;
	onChangeHandler: (e: SyntheticEvent) => void;
}
export const SearchInput = ({ searchPath, searchValue, onChangeHandler }: SearchInputProps) => (
	<Container>
		<Icon src={searchIcon} alt="search" />
		<SearchBarContainer
			placeholder={configPlaceholder(searchPath)}
			value={searchValue}
			onChange={onChangeHandler}
		/>
	</Container>
);
