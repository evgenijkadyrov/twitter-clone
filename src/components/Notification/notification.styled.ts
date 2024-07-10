import { keyframes, styled } from 'styled-components';

import * as Sizes from '@/style/sizes';

export const NotificationWrapper = styled.div`
	display: flex;
	position: absolute;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 2;
  }
  100% {
    opacity: 0;
  }
`;
export const ErrorWrapper = styled.div`
	background-color: ${({ theme }) => theme.notification.backgroundColor.primary};
	color: ${({ theme }) => theme.notification.color.primary};
	position: relative;
	border: ${Sizes.BorderSizes.b02} solid ${({ theme }) => theme.notification.border.error};
	padding: ${Sizes.PaddingSizes.p10} ${Sizes.PaddingSizes.p20};
	border-radius: ${Sizes.BorderRadiusSizes.br10};
	animation: ${fadeIn} 5s linear;
`;

export const SuccessWrapper = styled.div`
	background-color: ${({ theme }) => theme.notification.backgroundColor.primary};
	color: ${({ theme }) => theme.notification.color.primary};
	position: relative;
	border: ${Sizes.BorderSizes.b02} solid ${({ theme }) => theme.notification.border.success};
	padding: ${Sizes.PaddingSizes.p10} ${Sizes.PaddingSizes.p20};
	border-radius: ${Sizes.BorderRadiusSizes.br10};
	animation: ${fadeIn} 5s linear;
`;
export const CloseButton = styled.button`
	position: absolute;
	top: ${Sizes.MarginSizes.m05};
	right: ${Sizes.MarginSizes.m05};
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.textColor};
	font-size: ${({ theme }) => theme.fontSize.f14};
	cursor: pointer;
`;
