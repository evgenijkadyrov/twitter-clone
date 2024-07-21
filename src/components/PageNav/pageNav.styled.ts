import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Header = styled.header`
	padding: ${Sizes.PaddingSizes.p14} ${Sizes.PaddingSizes.p10};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled.p`
	margin-bottom: ${Sizes.MarginSizes.m05};
	position: relative;
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	font-size: ${({ theme }) => theme.fontSize.f20};
	color: ${({ theme }) => theme.textColor};
	@media screen and (max-width: 550px) {
		font-size: ${({ theme }) => theme.fontSize.f18};
	}
`;

export const ThemeToggler = styled.div`
	border: ${Sizes.BorderSizes.b02} solid ${({ theme }) => theme.border};
	width: ${Sizes.WidthSizes.w60};
	height: ${Sizes.HeightSizes.h32};
	display: flex;
	align-items: center;
	justify-content: space-around;

	border-radius: ${Sizes.BorderRadiusSizes.br15};

	@media screen and (max-width: 550px) {
		width: ${Sizes.WidthSizes.w40};
	}
`;

const RadioButton = styled.input`
	margin: 0;
	border: ${Sizes.BorderSizes.b02} solid transparent;
	width: ${Sizes.WidthSizes.w32};
	height: ${Sizes.HeightSizes.h32};

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	border-radius: 50%;

	cursor: pointer;

	&:checked {
		border-color: ${({ theme }) => theme.border};
		background-color: ${({ theme }) => theme.fontColors.grey};
	}

	@media screen and (max-width: 550px) {
		width: ${Sizes.WidthSizes.w20};
		height: ${Sizes.HeightSizes.h20};
	}
`;

export const LightThemeRadioButton = styled(RadioButton)`
	&:checked {
		margin: 0 0 0 -2px;
	}
`;

export const DarkThemeRadioButton = styled(RadioButton)`
	&:checked {
		margin: 0 -2px 0 0;
	}
`;
export const BackIcon = styled.img`
	height: ${Sizes.HeightSizes.h20};
	width: ${Sizes.WidthSizes.w20};
	cursor: pointer;
`;
