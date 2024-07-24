import styled from 'styled-components';

export const ErrorWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40%;
`;

export const Heading = styled.h4`
	font-size: ${({ theme }) => theme.fontSize.f24};
	color: ${({ theme }) => theme.textColor};
`;
