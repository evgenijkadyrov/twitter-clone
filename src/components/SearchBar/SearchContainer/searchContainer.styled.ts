import AvatarDefault from '@assets/images/avatar.png';
import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Title = styled.p`
	padding: ${Sizes.PaddingSizes.p20} 0;
	color: ${({ theme }) => theme.textColor};

	font-size: ${({ theme }) => theme.fontSize.f20};
`;

interface AvatarProps {
	background_url: string;
}
export const Avatar = styled.div<AvatarProps>`
	text-align: center;
	border-radius: 50%;
	width: ${Sizes.WidthSizes.w40};
	height: ${Sizes.HeightSizes.h40};
	background-image: url(${({ background_url }) => background_url || AvatarDefault});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	margin-left: ${Sizes.MarginSizes.m15};
`;
