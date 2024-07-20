import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const StyledButton = styled.button<{
	$width: string;
	$color: string;
}>`
	width: ${({ $width }) => $width || '100%'};
	background-color: ${({ theme, $color }) =>
		$color ? theme.button.backgroundColor[$color] : theme.button.backgroundColor.primary};
	height: ${Sizes.HeightSizes.h40};
	border: ${Sizes.BorderSizes.b01} solid ${({ theme }) => theme.border};
	border-radius: ${Sizes.BorderRadiusSizes.br40};
	margin-bottom: ${Sizes.MarginSizes.m20};
	color: ${({ theme }) => theme.button.textColor.primary};
	cursor: pointer;

	&:disabled {
		background-color: ${({ theme }) => theme.button.backgroundColor.disabled};
		cursor: default;
	}
	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.button.backgroundColor.hover};
	}
`;
