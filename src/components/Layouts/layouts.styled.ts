import styled from 'styled-components';

import { ScreenWidth } from '@/style/screenWidth';
import { PaddingSizes } from '@/style/sizes';

export const Section = styled.section`
	height: auto;
	min-height: 100%;
	display: flex;
	justify-content: center;
	gap: ${PaddingSizes.p35};

	@media screen and (max-width: ${ScreenWidth.iPad}) {
		gap: ${PaddingSizes.p10};
	}
`;
