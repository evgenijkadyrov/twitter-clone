import styled from 'styled-components';

import { ScreenWidth } from '@/style/screenWidth';

export const SearchBarWrapper = styled.div`
	display: flex;
	flex-basis: 20%;

	@media screen and (max-width: ${ScreenWidth.iPad}) {
		flex-basis: 20%;
	}
`;
