import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const SearchBarWrapper = styled.div<{ $isVisible?: boolean }>`
	display: flex;
	flex-basis: 20%;
	position: relative;
	flex-direction: column;
	padding-top: ${Sizes.PaddingSizes.p20};

	@media screen and (max-width: 1068px) {
		position: absolute;
		top: 0;
		right: ${({ $isVisible }) => ($isVisible ? '0' : '100%')};
		display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
		z-index: 10;
		margin-top: 0;
		min-height: 100vh;
		padding: ${Sizes.PaddingSizes.p64} ${Sizes.PaddingSizes.p20};
		scroll-behavior: inherit;
		background-color: ${({ theme }) => theme.backgroundColors.sidebar};
		box-shadow: -${Sizes.BorderSizes.b01} 0 ${Sizes.HeightSizes.h20} 0 ${({ theme }) => theme.shadowColor};
	}

	transition: left 0.8s linear;
`;
export const Span = styled.span`
    position: relative;

    display: block;
  width: ${Sizes.WidthSizes.w32};
  height: ${Sizes.HeightSizes.h04};
  margin-bottom: ${Sizes.MarginSizes.m05};

  background-color: ${({ theme }) => theme.fontColors.grey};
  border-radius: ${Sizes.BorderRadiusSizes.br03};


  z-index: 1;
    transform-origin: ${Sizes.HeightSizes.h04} 0;
    transition:
        transform 0.5s linear,
        opacity 0.55s linear;

 
    }
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

	@media screen and (max-width: 1068px) {
		display: block;
	}
`;
