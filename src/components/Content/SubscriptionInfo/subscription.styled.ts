import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const SubscriptionInfo = styled.div`
	display: flex;
	margin: ${Sizes.MarginSizes.m40} ${Sizes.MarginSizes.m15};
	@media screen and (max-width: 768px) {
		margin: ${Sizes.MarginSizes.m20} ${Sizes.MarginSizes.m10};
	}
	@media screen and (max-width: 568px) {
		margin: ${Sizes.MarginSizes.m10} ${Sizes.MarginSizes.m05};
	}
`;
