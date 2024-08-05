import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

const BOTTOM_POSITION = '10px';
const HEIGHT_DIVIDER = '1px';

export const TweetContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 16fr 1fr;
  grid-gap: ${Sizes.GapSizes.g10}
  margin-bottom: ${Sizes.MarginSizes.m10};
  position: relative;
`;

interface TweetImageProps {
	background_url: string;
	height: string;
}

export const TweetImage = styled.div<TweetImageProps>`
	text-align: center;
	width: 100%;
	height: ${({ height }) => height};
	background-image: url(${({ background_url }) => background_url});
	background-position: left;
	background-size: contain;
	background-repeat: no-repeat;
	margin-left: ${Sizes.MarginSizes.m15};

	@media screen and (max-width: 1085px) {
		height: ${Sizes.HeightSizes.h250};
	}
	@media screen and (max-width: 768px) {
		max-height: ${Sizes.HeightSizes.h200};
	}
	@media screen and (max-width: 568px) {
		max-height: ${Sizes.HeightSizes.h150};
	}
`;
export const TweetText = styled.div`
	margin-top: ${Sizes.MarginSizes.m15};
	font-size: ${({ theme }) => theme.fontSize.f18};
	color: ${({ theme }) => theme.textColor};

	@media screen and (max-width: 768px) {
		margin-top: ${Sizes.MarginSizes.m10};
		font-size: ${({ theme }) => theme.fontSize.f14};
	}
	@media screen and (max-width: 568px) {
		margin-top: ${Sizes.MarginSizes.m05};
		font-size: ${({ theme }) => theme.fontSize.f12};
	}
`;
export const Settings = styled.button`
	display: flex;
	height: 20px;
	width: 20px;
	justify-content: flex-end;
	color: ${({ theme }) => theme.textColor};
`;
export const TweetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${Sizes.MarginSizes.m20};

  &:after {
    position: absolute;
    left: 0;
    bottom: ${BOTTOM_POSITION};
    content: '';
    width: 100%;
    height: ${HEIGHT_DIVIDER};
    background-color: ${({ theme }) => theme.border};
    @media screen and (max-width: 768px) {
      margin-bottom: ${Sizes.MarginSizes.m10};
    }
`;

export const TextAreaEditable = styled.textarea`
	width: 80%;
	border: ${Sizes.BorderSizes.b01} solid ${({ theme }) => theme.input.border.primary};
	padding: ${Sizes.MarginSizes.m15};
	outline: none;
	font: inherit;
	font-size: ${({ theme }) => theme.fontSize.f18};
	color: ${({ theme }) => theme.input.textColor.primary};
	background-color: ${({ theme }) => theme.input.backgroundColor.primary};
	border-radius: ${Sizes.BorderRadiusSizes.br06};
	transition: all 0.3s linear;

	&:focus {
		border-color: ${({ theme }) => theme.input.border.focused};
	}

	&::placeholder {
		font: inherit;
		font-size: ${({ theme }) => theme.fontSize.f18};
		color: ${({ theme }) => theme.input.placeholder.primary};
	}
`;
