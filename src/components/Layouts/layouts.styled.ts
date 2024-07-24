import styled from 'styled-components';

import { ScreenWidth } from '@/style/screenWidth';
import * as Sizes from '@/style/sizes';

export const Section = styled.section`
	height: auto;
	min-height: 100%;
	display: flex;
	justify-content: center;
	gap: ${Sizes.PaddingSizes.p35};
	background-color: ${({ theme }) => theme.backgroundColor};

	@media screen and (max-width: ${ScreenWidth.iPad}) {
		gap: ${Sizes.PaddingSizes.p10};
	}
`;
