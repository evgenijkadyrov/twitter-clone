import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

const LEFT_POSITION = '45px';
export const Title = styled.p`
	margin-bottom: ${Sizes.MarginSizes.m05};
	position: relative;
	left: ${LEFT_POSITION};
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	font-size: ${({ theme }) => theme.fontSize.f20};

	@media screen and (max-width: 568px) {
		font-size: ${({ theme }) => theme.fontSize.f18};
	}
`;
