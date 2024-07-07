import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const StyledInput = styled.input<{ $width?: string }>`
	width: ${({ $width }) => $width || '100%'};
	border: ${Sizes.BorderSizes.b01} solid ${({ theme }) => theme.input.border.primary};
	padding: ${Sizes.MarginSizes.m15};
	outline: none;
	font: inherit;
	font-size: ${({ theme }) => theme.fontSize.f18};
	color: ${({ theme }) => theme.input.textColor.primary};
	background-color: ${({ theme }) => theme.input.backgroundColor.primary};

	border-radius: ${Sizes.BorderRadiusSizes.br06};

	transition: all 0.3s linear;

	&:focus {
		border-color: ${({ theme }) => theme.input.border.focused};
	}

	&::placeholder {
		font: inherit;
		font-size: ${({ theme }) => theme.fontSize.f18};

		color: ${({ theme }) => theme.input.placeholder.primary};
	}
`;
export const ErrorMessage = styled.p`
	font-size: ${({ theme }) => theme.fontSize.f12};

	color: ${({ theme }) => theme.fontColors.red};
`;
