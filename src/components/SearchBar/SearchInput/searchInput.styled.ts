import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Container = styled.div`
	position: relative;
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
