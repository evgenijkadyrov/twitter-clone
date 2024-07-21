import { Link, PathMatch } from 'react-router-dom';
import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const StyledLink = styled(Link)<{ $active: PathMatch | null }>`
	padding: ${Sizes.PaddingSizes.p05} ${Sizes.PaddingSizes.p10};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-weight: ${({ $active, theme }) =>
		$active ? theme.fontWeights.semiBold : theme.fontWeights.regular};
	color: ${({ theme }) => theme.textColor};
	border-radius: ${Sizes.BorderRadiusSizes.br06};
	transition: background-color 0.3s linear;

	&:hover {
		background-color: ${({ theme }) => theme.links.backgroundColor.hover};
	}
`;

export const ListItem = styled.li`
	margin-bottom: ${Sizes.MarginSizes.m20};
`;
export const Icon = styled.img`
	margin-right: ${Sizes.MarginSizes.m15};
`;
