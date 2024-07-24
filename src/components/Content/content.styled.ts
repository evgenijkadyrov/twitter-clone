import styled from 'styled-components';

import { ScreenWidth } from '@/style/screenWidth';

export const Content = styled.div`
	display: flex;
	flex-basis: 50%;
	flex-direction: column;

	@media screen and (max-width: ${ScreenWidth.iPad}) {
		flex-basis: 60%;
	}
	@media screen and (max-width: ${ScreenWidth.iPad}) {
		flex-basis: 70%;
	}
`;
