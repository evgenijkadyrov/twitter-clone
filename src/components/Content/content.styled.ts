import styled from 'styled-components';

import { ScreenWidth } from '@/style/screenWidth';

export const Content = styled.div`
	background-color: aqua;
	display: flex;
	flex-basis: 50%;

	@media screen and (max-width: ${ScreenWidth.iPad}) {
		flex-basis: 50%;
	}
`;
