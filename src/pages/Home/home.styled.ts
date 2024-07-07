import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Section = styled.section`
	height: 100%;
`;
export const Row = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: ${Sizes.GapSizes.g40};
`;
export const Column = styled.div`
	padding-top: ${Sizes.PaddingSizes.p200};

	display: flex;
	flex-direction: column;
`;
export const Icon = styled.img`
	margin-bottom: ${Sizes.MarginSizes.m60};
	height: ${Sizes.HeightSizes.h50};
	width: ${Sizes.WidthSizes.w40};
`;
export const Image = styled.img`
	width: 60%;
`;
export const Title = styled.h1`
	margin-bottom: ${Sizes.MarginSizes.m40};
	font-size: ${({ theme }) => theme.fontSize.f64};
`;
export const SubTitle = styled.h3`
	margin-bottom: ${Sizes.MarginSizes.m30};
	font-size: ${({ theme }) => theme.fontSize.f42};
`;
export const Button = styled.button`
	width: ${Sizes.WidthSizes.w400};
	background-color: ${({ theme }) => theme.button.backgroundColor};
	height: ${Sizes.HeightSizes.h60};
	border: ${Sizes.BorderSizes.b01} solid ${({ theme }) => theme.border};
	border-radius: ${Sizes.BorderRadiusSizes.br40};
	margin-bottom: ${Sizes.MarginSizes.m20};

	&:hover {
		cursor: pointer;
	}
`;
export const WrapperForButtonContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ButtonIcon = styled.img`
	width: ${Sizes.WidthSizes.w32};
	height: ${Sizes.HeightSizes.h32};
`;
export const ButtonText = styled.p`
	font-size: ${({ theme }) => theme.fontSize.f20};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
export const Text = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f14};
	width: ${Sizes.WidthSizes.w375};
	margin-top: ${Sizes.MarginSizes.m10};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	line-height: ${({ theme }) => theme.fontSize.f20};
	margin-bottom: ${Sizes.MarginSizes.m20};
`;
export const StyledLink = styled(Link)`
	font-size: ${({ theme }) => theme.fontSize.f16};
	color: ${({ theme }) => theme.fontColors.blue};
`;

export const ListItem = styled.div`
	margin-right: ${Sizes.MarginSizes.m10};
	font-size: ${({ theme }) => theme.fontSize.f12};
	color: ${({ theme }) => theme.textColor};
	margin-bottom: ${Sizes.MarginSizes.m20};
`;
export const List = styled.div`
	display: flex;
	justify-content: center;
	margin-top: ${Sizes.MarginSizes.m20};
	gap: ${Sizes.GapSizes.g15};
`;
