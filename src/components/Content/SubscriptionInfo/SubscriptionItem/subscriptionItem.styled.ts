import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const CountValue = styled.div`
	margin-right: ${Sizes.MarginSizes.m05};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	color: ${({ theme }) => theme.textColor};
`;
export const TextValue = styled.div`
	margin-right: ${Sizes.MarginSizes.m25};
	color: ${({ theme }) => theme.fontColors.grey};
`;
