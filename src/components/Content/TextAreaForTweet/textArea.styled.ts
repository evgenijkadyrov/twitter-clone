import styled from 'styled-components';

import { Colors } from '@/style/colors';
import * as Sizes from '@/style/sizes';

export const StyledTextarea = styled.textarea`
	padding: ${Sizes.PaddingSizes.p08};
	border-radius: ${Sizes.BorderRadiusSizes.br10};
	font-size: ${({ theme }) => theme.fontSize.f20};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	color: ${({ theme }) => theme.fontColors};
	background-color: ${({ theme }) => theme.input.backgroundColor.search};
	width: 100%;
	border: none;

	&:focus {
		border: ${Sizes.BorderSizes.b01} solid ${Colors.grey[400]};
		outline: none;
	}
`;
