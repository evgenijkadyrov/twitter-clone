import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

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
	@media screen and (max-width: 1068px) {
		font-size: ${({ theme }) => theme.fontSize.f18};
	}
	@media screen and (max-width: 768px) {
		font-size: ${({ theme }) => theme.fontSize.f14};
	}
`;
