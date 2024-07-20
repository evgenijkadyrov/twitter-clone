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

export const Title = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	//line-height: 19px;
	margin-bottom: ${Sizes.MarginSizes.m05};
`;
