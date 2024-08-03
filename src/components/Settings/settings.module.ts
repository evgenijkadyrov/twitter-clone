import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const SettingsContainer = styled.div`
	position: relative;
`;

export const SettingsButton = styled.button`
	background-color: transparent;
	padding: ${Sizes.PaddingSizes.p05} ${Sizes.PaddingSizes.p10};
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
	top: -${Sizes.HeightSizes.h03};
	right: ${Sizes.HeightSizes.h100};
	width: ${Sizes.HeightSizes.h50};
	height: ${Sizes.HeightSizes.h75};
	padding: ${Sizes.PaddingSizes.p10};
	border-radius: ${Sizes.BorderRadiusSizes.br06};
	text-align: center;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		right: ${Sizes.PaddingSizes.p14};
		top: ${Sizes.PaddingSizes.p32};
	}
`;
