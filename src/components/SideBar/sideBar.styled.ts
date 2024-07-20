import AvatarDefault from '@assets/images/avatar.png';
import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const SideBarWrapper = styled.div`
	display: flex;
	flex-basis: 10%;
	flex-direction: column;
`;
export const Button = styled.button`
	width: 100%;
	background-color: ${({ theme, color }) =>
		color ? theme.button.backgroundColor[color] : theme.button.backgroundColor.primary};
	height: ${Sizes.HeightSizes.h40};
	border: ${Sizes.BorderSizes.b01} solid ${({ theme }) => theme.border};
	border-radius: ${Sizes.BorderRadiusSizes.br40};
	margin-bottom: ${Sizes.MarginSizes.m20};
	color: ${({ theme }) => theme.button.textColor.primary};

	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.button.backgroundColor.hover};
	}
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
export const Row = styled.div`
	display: flex;
	align-items: center;
`;
export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: ${Sizes.MarginSizes.m20} ${Sizes.MarginSizes.m40} ${Sizes.MarginSizes.m20}
		${Sizes.MarginSizes.m20};
`;
export const Title = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	//line-height: 19px;
	margin-bottom: ${Sizes.MarginSizes.m05};
`;
export const SubTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	//line-height: 19px;
	color: ${({ theme }) => theme.fontColors.grey};
`;
