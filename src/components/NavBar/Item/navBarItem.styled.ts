import { Link, PathMatch } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)<{ $active: PathMatch<string> | null }>`
	padding: 5px 10px;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	font-weight: ${({ $active, theme }) =>
		$active ? theme.fontWeights.semiBold : theme.fontWeights.regular};

	border-radius: 8px;

	transition: background-color 0.3s linear;

	&:hover {
		background-color: ${({ theme }) => theme.links.backgroundColor.hover};
	}
`;

export const ListItem = styled.li`
	margin-bottom: 20px;
`;
export const Icon = styled.img`
	margin-right: 15px;
`;
