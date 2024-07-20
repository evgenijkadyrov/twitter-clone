import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const ErrorStyled = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f12};
	margin-top: ${Sizes.MarginSizes.m05};
	margin-bottom: ${Sizes.MarginSizes.m10};
	color: ${({ theme }) => theme.fontColors.red};
`;
