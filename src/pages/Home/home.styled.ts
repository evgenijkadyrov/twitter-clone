import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Section = styled.section`
	height: 100%;
	background-color: ${({ theme }) => theme.backgroundColor};
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
	max-height: 100vh;
`;
export const Title = styled.h1`
	margin-bottom: ${Sizes.MarginSizes.m40};
	font-size: ${({ theme }) => theme.fontSize.f64};
	color: ${({ theme }) => theme.textColor};
`;
export const SubTitle = styled.h3`
	margin-bottom: ${Sizes.MarginSizes.m30};
	font-size: ${({ theme }) => theme.fontSize.f42};
	color: ${({ theme }) => theme.textColor};
`;

export const Text = styled.div`
	color: ${({ theme }) => theme.textColor};
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
	padding-bottom: ${Sizes.MarginSizes.m20};
	color: ${({ theme }) => theme.textColor};
`;
export const List = styled.div`
	background-color: ${({ theme }) => theme.backgroundColor};
	display: flex;
	justify-content: center;
	padding-top: ${Sizes.MarginSizes.m20};
	gap: ${Sizes.GapSizes.g15};
`;
