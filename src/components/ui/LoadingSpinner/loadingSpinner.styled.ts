import styled, { keyframes } from 'styled-components';

import * as Sizes from '@/style/sizes';

const TOP_POSITION = '6px';
const RIGHT_POSITION = '8px';
export const Container = styled.div`
	top: 0;
	left: 0;
	width: ${Sizes.WidthSizes.w50};
	height: ${Sizes.HeightSizes.h50};
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.backgroundColor};
`;

export const Ring = styled.div`
	position: relative;
	width: ${Sizes.WidthSizes.w50};
	height: ${Sizes.HeightSizes.h50};

	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.f20};
	letter-spacing: ${Sizes.HeightSizes.h04};
	text-transform: uppercase;
	line-height: ${Sizes.HeightSizes.h190};

	background: transparent;
	border: ${Sizes.BorderRadiusSizes.br03} solid ${({ theme }) => theme.backgroundColors.blue};
	border-radius: 50%;

	color: ${({ theme }) => theme.fontColors.blue};
`;

const circleAnimation = keyframes`
  0% {
    transform: rotate(45deg)
  }
  100% {
    transform: rotate(405deg);
  }
`;

export const Span = styled.span`
	position: absolute;
	top: calc(50% - 2px);
	left: 50%;

	width: 50%;
	height: ${Sizes.HeightSizes.h04};

	display: block;

	background: transparent;

	transform-origin: left;
	animation: ${circleAnimation} 2s linear infinite;

	&:before {
		content: '';
		position: absolute;
		top: -${TOP_POSITION};
		right: -${RIGHT_POSITION};

		width: ${Sizes.WidthSizes.w16};
		height: ${Sizes.HeightSizes.h16};

		border-radius: 50%;
		background: ${({ theme }) => theme.backgroundColors.blue};

		box-shadow: 0 0 ${Sizes.HeightSizes.h20} ${({ theme }) => theme.backgroundColors.blue};
	}
`;
