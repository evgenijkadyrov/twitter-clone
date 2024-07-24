import ProfileBackground from '@assets/images/home-background.jpg';
import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

interface ImageBackgroundProps {
	background_url: string;
}
export const ImageBackground = styled.div<ImageBackgroundProps>`
	height: ${Sizes.HeightSizes.h250};
	width: 100%;
	background-image: url(${({ background_url }) => background_url || ProfileBackground});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	@media screen and (max-width: 1085px) {
		height: ${Sizes.HeightSizes.h150};
	}
	@media screen and (max-width: 750px) {
		height: ${Sizes.HeightSizes.h60};
	}
`;
export const BlockName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	margin-left: ${Sizes.MarginSizes.m15};
	margin-top: ${Sizes.MarginSizes.m20};
	color: ${({ theme }) => theme.textColor};
`;
export const TweetsCount = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	color: ${({ theme }) => theme.fontColors.grey};
	margin-left: ${Sizes.MarginSizes.m15};
	margin-top: ${Sizes.MarginSizes.m05};
	margin: ${Sizes.MarginSizes.m05} 0 ${Sizes.MarginSizes.m20} ${Sizes.MarginSizes.m15};
`;
