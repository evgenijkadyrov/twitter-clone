import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const TweetWrapper = styled.div`
	cursor: pointer;
	@media screen and (max-width: 1068px) {
		width: ${Sizes.WidthSizes.w75};
	}
`;
