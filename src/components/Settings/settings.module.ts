import styled from 'styled-components';

export const SettingsContainer = styled.div`
	position: relative;
`;

export const SettingsButton = styled.button`
	background-color: transparent;
	padding: 5px 10px;
	position: relative;
	border: none;
	cursor: pointer;
`;

interface ModalContentProps {
	$show: boolean;
}

export const ModalContent = styled.div<ModalContentProps>`
	display: flex;
	position: absolute;
	top: -4px;
	right: 90px;
	width: 50px;
	height: 80px;
	padding: 10px;
	border-radius: 5px;
	text-align: center;
`;
