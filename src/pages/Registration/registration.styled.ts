import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Section = styled.section`
	max-width: ${Sizes.WidthSizes.w450};
	margin: 0 auto;
	padding-top: ${Sizes.PaddingSizes.p64};
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	height: 100%;
	background-color: ${({ theme }) => theme.backgroundColor};
	color: ${({ theme }) => theme.textColor};
`;

export const Title = styled.h1`
	margin-bottom: ${Sizes.MarginSizes.m40};

	font-size: ${({ theme }) => theme.fontSize.f32};
	@media screen and (max-width: 768px) {
		font-size: ${({ theme }) => theme.fontSize.f24};
		margin-bottom: ${Sizes.MarginSizes.m20};
	}
	@media screen and (max-width: 568px) {
		font-size: ${({ theme }) => theme.fontSize.f18};
		margin-bottom: ${Sizes.MarginSizes.m10};
	}
`;

export const StyledLink = styled(Link)`
	max-width: fit-content;
	margin-top: ${Sizes.MarginSizes.m25};
	margin-bottom: ${Sizes.MarginSizes.m15};
	margin-left: auto;
	border-bottom: ${Sizes.BorderSizes.b01} solid transparent;

	color: ${({ theme }) => theme.fontColors.blue};

	transition: all 0.3s linear;

	&:hover {
		border-color: ${({ theme }) => theme.fontColors.blue};
	}
`;

export const Inputs = styled.div`
	margin-bottom: ${Sizes.MarginSizes.m20};
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: ${Sizes.GapSizes.g15};
`;

export const Logo = styled.img`
	width: ${Sizes.WidthSizes.w50};
	height: ${Sizes.HeightSizes.h40};
	margin-bottom: ${Sizes.MarginSizes.m40};
`;
export const Button = styled.button`
	width: 100%;
	background-color: ${({ theme }) => theme.button.backgroundColor.primary};
	height: ${Sizes.HeightSizes.h60};
	border: ${Sizes.BorderSizes.b01} solid ${({ theme }) => theme.border};
	border-radius: ${Sizes.BorderRadiusSizes.br40};
	margin-bottom: ${Sizes.MarginSizes.m20};
	color: ${({ theme }) => theme.button.textColor.primary};

	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.button.backgroundColor.hover};
	}
`;
export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: ${Sizes.MarginSizes.m30};
`;
export const SubTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f18};
	margin-top: ${Sizes.MarginSizes.m15};
`;
export const AgeConfirmText = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	color: ${({ theme }) => theme.fontColors.grey};
	margin-bottom: ${Sizes.MarginSizes.m30};
	margin-top: ${Sizes.MarginSizes.m30};
`;
export const SelectWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: ${Sizes.MarginSizes.m30};
`;
export const ErrorMessage = styled.div`
	color: ${({ theme }) => theme.notification.border.error};
	font-size: ${({ theme }) => theme.fontSize.f12};
	margin-bottom: ${Sizes.MarginSizes.m30} 0;
`;
