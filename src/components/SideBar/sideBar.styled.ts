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
export const Avatar = styled.img`
	text-align: center;
	width: ${Sizes.WidthSizes.w40};
	height: ${Sizes.HeightSizes.h40};
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
