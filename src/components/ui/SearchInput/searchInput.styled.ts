import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Container = styled.div`
	position: relative;
	width: 100%;
`;
export const SearchInputContainer = styled.input`
	padding: ${Sizes.PaddingSizes.p10} 0 ${Sizes.PaddingSizes.p10} ${Sizes.PaddingSizes.p50};
	width: 100%;

	outline: none;
	border: none;

	border-radius: ${Sizes.BorderRadiusSizes.br40};
	background-color: ${({ theme }) => theme.input.backgroundColor.search};
	color: ${({ theme }) => theme.input.textColor};

	font: inherit;
	font-size: ${({ theme }) => theme.fontSize.f18};

	&::placeholder {
		font: inherit;
		font-size: ${({ theme }) => theme.fontSize.f18};

		color: ${({ theme }) => theme.input.placeholder.primary};
	}

	@media screen and (max-width: 1068px) {
		background-color: ${({ theme }) => theme.border};
	}
`;

export const Icon = styled.img`
	position: absolute;
	left: 5%;
	top: 50%;

	transform: translateY(-50%);
`;

export const Title = styled.p`
	padding: ${Sizes.PaddingSizes.p20} 0;
	color: ${({ theme }) => theme.textColor};

	font-size: ${({ theme }) => theme.fontSize.f20};
`;
