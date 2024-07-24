import { useState } from 'react';
import { SearchContainer } from '@components/SearchBar/SearchContainer';

import { Burger, Container, SearchBarWrapper, Span } from './searchBar.styled';

export const SearchBar = () => {
	const [isVisibleSearchBar, setisVisible] = useState(false);
	const toggleVisibility = (): void => {
		setisVisible(!isVisibleSearchBar);
	};
	return (
		<Container>
			<Burger $isVisible={isVisibleSearchBar} onClick={toggleVisibility}>
				<Span className="first" />
				<Span className="second" />
				<Span className="third" />
			</Burger>
			<SearchBarWrapper $isVisible={isVisibleSearchBar}>
				<SearchContainer />
			</SearchBarWrapper>
		</Container>
	);
};
