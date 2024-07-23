import AvatarDefault from '@assets/images/avatar.png';
import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const SearchBarWrapper = styled.aside<{ $isVisible?: boolean }>`
	padding-top: ${Sizes.PaddingSizes.p32};
	width: 100%;

	@media screen and (max-width: 1000px) {
		position: absolute;
		top: 0;
		right: ${({ $isVisible }) => ($isVisible ? '0' : '-100%')};
		z-index: 10;

		height: 100%;
		padding: ${Sizes.PaddingSizes.p64} ${Sizes.PaddingSizes.p20};

		background-color: ${({ theme }) => theme.backgroundColors.sidebar};
		box-shadow: -1px 0 21px 0 ${({ theme }) => theme.shadowColor};
	}

	transition: right 0.4s linear;
`;
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
