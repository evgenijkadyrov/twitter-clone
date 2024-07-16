import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
	font-size: ${({ theme }) => theme.fontSize.f20};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	color: ${({ theme }) => theme.fontColors.grey};
	width: 100%;
	border: none;
`;
