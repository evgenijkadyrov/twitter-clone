import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const SideBarWrapper = styled.div`
	display: flex;
	flex-basis: 10%;
	flex-direction: column;
`;

export const Title = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	margin-bottom: ${Sizes.MarginSizes.m05};
	color: ${({ theme }) => theme.textColor};
`;
