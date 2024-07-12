import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const SubscriptionInfo = styled.div`
	display: flex;
	margin: ${Sizes.MarginSizes.m40} ${Sizes.MarginSizes.m15};
`;
export const SubscriptionItem = styled.div`
	display: flex;
	margin-right: ${Sizes.MarginSizes.m25};
	font-size: ${({ theme }) => theme.fontSize.f18};
`;
export const CountValue = styled.div`
	margin-right: ${Sizes.MarginSizes.m05};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const TextValue = styled.div`
	margin-right: ${Sizes.MarginSizes.m25};
	color: ${({ theme }) => theme.fontColors.grey};
`;
