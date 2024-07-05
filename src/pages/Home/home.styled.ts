import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
	height: 100%;
`;
export const Row = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 40px;
`;
export const Column = styled.div`
	padding-top: 200px;

	display: flex;
	flex-direction: column;
`;
export const Icon = styled.img`
	margin-bottom: 57px;
	height: 50px;
	width: 41px;
`;
export const Image = styled.img`
	width: 60%;
`;
export const Title = styled.h1`
	margin-bottom: 45px;
	font-size: 64px;
`;
export const SubTitle = styled.h3`
	margin-bottom: 31px;
	font-size: 42px;
`;
export const Button = styled.button`
	width: 403px;
	background-color: white;
	height: 62px;
	border: 1px solid #e4eaed;
	border-radius: 40px;
	margin-bottom: 21px;
	&:hover {
		cursor: pointer;
	}
`;
export const WrapperForButtonContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ButtonIcon = styled.img`
	width: 32px;
	height: 32px;
`;
export const ButtonText = styled.p`
	font-size: 20px;
	font-weight: 500;
	font-family: Roboto, serif;
`;
export const Text = styled.div`
	font-size: 14px;
	width: 373px;
	margin-top: 10px;
	font-weight: 500;
	line-height: 20px;
	margin-bottom: 21px;
`;
export const StyledLink = styled(Link)`
	font-size: 16px;
	color: blue;
`;
