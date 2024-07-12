import ProfileBackground from '@assets/images/home-background.jpg';
import styled from 'styled-components';

import { MarginSizes } from '@/style/sizes';

interface ImageBackgroundProps {
	background_url: string;
}
export const ImageBackground = styled.div<ImageBackgroundProps>`
	height: 250px;
	width: 100%;
	background-image: url(${({ background_url }) => background_url || ProfileBackground});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;
export const BlockName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	margin-left: ${MarginSizes.m15};
	margin-top: ${MarginSizes.m20};
`;
export const TweetsCount = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	color: ${({ theme }) => theme.fontColors.grey};
	margin-left: ${MarginSizes.m15};
	margin-top: ${MarginSizes.m05};
	margin: ${MarginSizes.m05} 0 ${MarginSizes.m20} ${MarginSizes.m15};
`;
