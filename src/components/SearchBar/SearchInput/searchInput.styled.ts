import AvatarDefault from '@assets/images/avatar.png';
import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Container = styled.div`
	position: relative;
	width: 100%;
`;

export const SearchBarContainer = styled.input`
	padding: 15px 0;
	padding-left: 50px;
	width: 100%;

	outline: none;
	border: none;

	border-radius: ${Sizes.BorderRadiusSizes.br40};
	background-color: ${({ theme }) => theme.input.backgroundColor.search};
	color: ${({ theme }) => theme.fontColors.grey};

	font: inherit;
	font-size: ${({ theme }) => theme.fontSize.f18};

	&::placeholder {
		font: inherit;
		font-size: ${({ theme }) => theme.fontSize.f18};

		color: ${({ theme }) => theme.input.placeholder.primary};
	}

	@media screen and (max-width: 1000px) {
		background-color: ${({ theme }) => theme.border};
	}
`;

export const Icon = styled.img`
	position: absolute;
	left: 5%;
	top: 50%;

	transform: translateY(-50%);
`;
export const Aside = styled.aside<{ $isVisible?: boolean }>`
	padding-top: 30px;
	width: 100%;

	@media screen and (max-width: 1000px) {
		position: absolute;
		top: 0;
		right: ${({ $isVisible }) => ($isVisible ? '0' : '-100%')};
		z-index: 10;

		height: 100%;
		padding: 70px 20px;

		background-color: ${({ theme }) => theme.backgroundColors.sidebar};
		box-shadow: -1px 0 21px 0 ${({ theme }) => theme.shadowColor};
	}

	transition: right 0.4s linear;
`;
export const Title = styled.p`
	padding: 20px 0;
	color: ${({ theme }) => theme.textColor};

	font-size: ${({ theme }) => theme.fontSize.f20};
`;
export const TitleForRecommended = styled.p`
	color: ${({ theme }) => theme.textColor};
	margin-top: ${Sizes.MarginSizes.m20};
	font-size: ${({ theme }) => theme.fontSize.f24};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
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
	width: 150px;
	display: flex;
	flex-direction: column;
	margin: ${Sizes.MarginSizes.m20} ${Sizes.MarginSizes.m40} ${Sizes.MarginSizes.m20}
		${Sizes.MarginSizes.m20};
`;

export const SubTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	color: ${({ theme }) => theme.fontColors.grey};
`;
export const TitleProfile = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	color: ${({ theme }) => theme.textColor};
`;
