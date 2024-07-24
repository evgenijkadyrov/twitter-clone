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

	@media screen and (max-width: 1068px) {
		gap: ${Sizes.GapSizes.g15};
		flex-direction: column;
		align-items: center;
	}
	@media screen and (max-width: 768px) {
		gap: ${Sizes.GapSizes.g15};
		flex-direction: column;
		align-items: center;
	}
	@media screen and (max-width: 568px) {
		gap: ${Sizes.GapSizes.g15};
	}
`;
export const Column = styled.div`
	padding-top: ${Sizes.PaddingSizes.p200};

	display: flex;
	flex-direction: column;
	@media screen and (max-width: 1068px) {
		padding-top: ${Sizes.PaddingSizes.p64};
	}
	@media screen and (max-width: 768px) {
		padding-top: ${Sizes.PaddingSizes.p32};
	}
	@media screen and (max-width: 568px) {
		padding-top: ${Sizes.PaddingSizes.p20};
	}
`;
export const Icon = styled.img`
	margin-bottom: ${Sizes.MarginSizes.m60};
	height: ${Sizes.HeightSizes.h50};
	width: ${Sizes.WidthSizes.w40};
	@media screen and (max-width: 1068px) {
		margin-bottom: ${Sizes.MarginSizes.m40};
	}
	@media screen and (max-width: 768px) {
		margin-bottom: ${Sizes.MarginSizes.m25};
	}
	@media screen and (max-width: 568px) {
		margin-bottom: ${Sizes.MarginSizes.m15};
	}
`;
export const Image = styled.img`
	width: 60%;
	max-height: 100vh;
	@media screen and (max-width: 1068px) {
		width: 80%;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
	@media screen and (max-width: 568px) {
		display: none;
	}
`;
export const Title = styled.h1`
	margin-bottom: ${Sizes.MarginSizes.m40};
	font-size: ${({ theme }) => theme.fontSize.f64};
	color: ${({ theme }) => theme.textColor};
	@media screen and (max-width: 1068px) {
		font-size: ${({ theme }) => theme.fontSize.f35};
		margin-bottom: ${Sizes.MarginSizes.m15};
	}
	@media screen and (max-width: 768px) {
		font-size: ${({ theme }) => theme.fontSize.f24};
	}
	@media screen and (max-width: 568px) {
		font-size: ${({ theme }) => theme.fontSize.f18};
	}
`;
export const SubTitle = styled.h3`
	margin-bottom: ${Sizes.MarginSizes.m30};
	font-size: ${({ theme }) => theme.fontSize.f42};
	color: ${({ theme }) => theme.textColor};
	@media screen and (max-width: 1068px) {
		font-size: ${({ theme }) => theme.fontSize.f24};
		margin-bottom: ${Sizes.MarginSizes.m15};
	}
	@media screen and (max-width: 768px) {
		font-size: ${({ theme }) => theme.fontSize.f18};
	}
	@media screen and (max-width: 568px) {
		font-size: ${({ theme }) => theme.fontSize.f14};
	}
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

	@media screen and (max-width: 1068px) {
		gap: ${Sizes.GapSizes.g10};
		flex-wrap: wrap;
	}
	@media screen and (max-width: 768px) {
		gap: ${Sizes.GapSizes.g05};
		flex-wrap: wrap;
		padding-top: ${Sizes.MarginSizes.m05};
	}
	@media screen and (max-width: 568px) {
		gap: ${Sizes.GapSizes.g05};
		flex-wrap: wrap;
		padding-top: ${Sizes.MarginSizes.m05};
	}
`;
