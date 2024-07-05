import styled from 'styled-components';

import { Colors } from '@/style//colors';
import { ScreenWidth } from '@/style/screenWidth';

export const SearchBar = styled.div`
	background-color: ${Colors.blue[50]};
	display: flex;
	flex-basis: 20%;

	@media screen and (max-width: ${ScreenWidth.iPad}) {
		flex-basis: 20%;
	}
`;
