import styled from 'styled-components';

export const Title = styled.p`
	margin-bottom: 5px;
	position: relative;
	left: 45px;
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	font-size: ${({ theme }) => theme.fontSize.f20};

	@media screen and (max-width: 550px) {
		font-size: ${({ theme }) => theme.fontSize.f18};
	}
`;
