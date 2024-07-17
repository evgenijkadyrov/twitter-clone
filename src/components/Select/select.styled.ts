import styled from 'styled-components';

import arrow from '@/assets/icons/arrow-down.svg';
import * as Sizes from '@/style/sizes';

export const StyledSelect = styled.select<{ $width?: string | undefined }>`
	width: ${({ $width }) => $width || '100%'};
	border: ${Sizes.BorderSizes.b01} solid ${({ theme }) => theme.select.border.primary};
	padding: ${Sizes.PaddingSizes.p20};
	font: inherit;
	font-size: ${({ theme }) => theme.fontSize.f14};

	border-radius: ${Sizes.BorderRadiusSizes.br06};
	outline: none;
	appearance: none;

	background: url(${arrow}) no-repeat right;
	background-position-x: calc(100% - 8px);
	color: ${({ theme }) => theme.select.textColor.primary};

	transition: all 0.3s linear;

	cursor: pointer;

	&:focus {
		border-color: ${({ theme }) => theme.select.border.focused};
	}

	&:hover {
		border-color: ${({ theme }) => theme.select.border.hover};
	}
`;

export const StyledOption = styled.option`
	color: ${({ theme }) => theme.select.textColor.primary};

	&:disabled {
		color: ${({ theme }) => theme.select.textColor.disabled};
	}
`;
