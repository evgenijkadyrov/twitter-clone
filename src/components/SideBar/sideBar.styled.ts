import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const SideBarWrapper = styled.div<{ $isVisible?: boolean }>`
	display: flex;
	flex-basis: 10%;
	flex-direction: column;
	padding-top: ${Sizes.PaddingSizes.p20};

	@media screen and (max-width: 768px) {
		position: absolute;
		top: 0;
		left: ${({ $isVisible }) => ($isVisible ? '0' : '-100%')};
		z-index: 10;

		min-height: 100vh;
		padding-left: ${Sizes.PaddingSizes.p35};
		padding-right: ${Sizes.PaddingSizes.p20};

		background-color: ${({ theme }) => theme.backgroundColors.sidebar};
		box-shadow: ${Sizes.BorderSizes.b01} 0 ${Sizes.HeightSizes.h16} 0
			${({ theme }) => theme.shadowColor};
	}

	transition: left 0.4s linear;
`;

export const Title = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	margin-bottom: ${Sizes.MarginSizes.m05};
	color: ${({ theme }) => theme.textColor};
`;
export const Span = styled.span`
	position: relative;

	display: block;
	width: ${Sizes.WidthSizes.w32};
	height: ${Sizes.HeightSizes.h04};
	margin-bottom: ${Sizes.MarginSizes.m05};

	background-color: ${({ theme }) => theme.fontColors.grey};
	border-radius: ${Sizes.BorderRadiusSizes.br03};

	z-index: 11;
	transform-origin: ${Sizes.HeightSizes.h04} 0;
	transition:
		transform 0.5s linear,
		opacity 0.55s linear;
`;
export const Burger = styled.div<{ $isVisible?: boolean }>`
	height: 100%;
	padding-top: ${Sizes.PaddingSizes.p35};
	display: none;
	position: relative;
	top: 0;
	right: 0;
	z-index: 11;

	cursor: pointer;

	${Span}.first {
		transform-origin: 0 0;
	}

	${Span}.third {
		transform-origin: 0 100%;
	}

	${Span}.first {
		opacity: ${({ $isVisible }) => $isVisible && '1'};
		transform: ${({ $isVisible }) => $isVisible && 'rotate(45deg) translate(-1px, -4px)'};
	}

	${Span}.second {
		opacity: ${({ $isVisible }) => $isVisible && '0'};
		transform: ${({ $isVisible }) => $isVisible && 'rotate(0deg) scale(0.2, 0.2)'};
	}

	${Span}.third {
		opacity: ${({ $isVisible }) => $isVisible && '1'};
		transform: ${({ $isVisible }) => $isVisible && 'rotate(-45deg) translate(0, 0px)'};
	}

	@media screen and (max-width: 768px) {
		display: block;
	}
`;
