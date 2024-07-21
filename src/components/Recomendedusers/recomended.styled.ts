import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const TitleForRecommended = styled.p`
	color: ${({ theme }) => theme.textColor};
	margin-top: ${Sizes.MarginSizes.m20};
	font-size: ${({ theme }) => theme.fontSize.f24};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
