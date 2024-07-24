import { useState } from 'react';
import { SearchContainer } from '@components/SearchBar/SearchContainer';

import { Burger, SearchBarWrapper, Span } from './searchBar.styled';

export const SearchBar = () => {
	const [isVisibleSearchBar, setIsVisible] = useState(false);
	const toggleVisibility = (): void => {
		setIsVisible(!isVisibleSearchBar);
	};
	return (
		<>
			<Burger $isVisible={isVisibleSearchBar} onClick={toggleVisibility}>
				<Span className="first" />
				<Span className="second" />
				<Span className="third" />
			</Burger>
			<SearchBarWrapper $isVisible={isVisibleSearchBar}>
				<SearchContainer />
			</SearchBarWrapper>
		</>
	);
};
