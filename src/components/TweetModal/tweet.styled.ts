import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Container = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Modal = styled.div`
	position: relative;

	width: 500px;
	height: 250px;
	padding: 20px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	box-shadow: 0 0 5px ${({ theme }) => theme.shadowColor};
	border-radius: 6px;
	background-color: ${({ theme }) => theme.backgroundColor};

	@media screen and (max-width: 1000px) {
		padding-top: 30px;
		width: 100%;
	}

	@media screen and (max-width: 780px) {
		height: auto;
		padding-bottom: 10px;
	}
`;
export const ButtonClose = styled.button`
	position: absolute;
	right: 20px;
	border: none;
	background-color: transparent;
	font-size: 20px;
	cursor: pointer;
`;
export const FormTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f18};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	margin-top: ${Sizes.MarginSizes.m15};
	margin-bottom: ${Sizes.MarginSizes.m15};
`;
