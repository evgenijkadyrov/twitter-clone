import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

const RIGHT_POSITION_CLOSE = '20px';
export const Container = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Modal = styled.div`
  position: relative;

  width: ${Sizes.WidthSizes.w500};
  height: ${Sizes.HeightSizes.h250};
  padding: ${Sizes.PaddingSizes.p20};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0 ${Sizes.HeightSizes.h04} ${({ theme }) => theme.shadowColor};
  border-radius: ${Sizes.BorderRadiusSizes.br06}
  background-color: ${({ theme }) => theme.backgroundColor};

  @media screen and (max-width: 1085px) {
    padding-top: ${Sizes.PaddingSizes.p32};
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding-bottom: ${Sizes.PaddingSizes.p10};
  }
`;
export const ButtonClose = styled.button`
	position: absolute;
	right: ${RIGHT_POSITION_CLOSE};
	border: none;
	background-color: transparent;
	font-size: ${({ theme }) => theme.fontSize.f20};
	cursor: pointer;
`;
export const FormTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f18};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	margin-top: ${Sizes.MarginSizes.m15};
	margin-bottom: ${Sizes.MarginSizes.m15};
`;
