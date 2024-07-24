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
		height: 250px;
	}
	@media screen and (max-width: 750px) {
		max-height: 200px;
	}
	@media screen and (max-width: 568px) {
		max-height: 150px;
	}
`;
export const TweetText = styled.div`
	margin-top: ${Sizes.MarginSizes.m15};
	font-size: ${({ theme }) => theme.fontSize.f18};
	color: ${({ theme }) => theme.textColor};

	@media screen and (max-width: 750px) {
		margin-top: ${Sizes.MarginSizes.m10};
		font-size: ${({ theme }) => theme.fontSize.f14};
	}
	@media screen and (max-width: 568px) {
		margin-top: ${Sizes.MarginSizes.m05};
		font-size: ${({ theme }) => theme.fontSize.f12};
	}
`;
export const Settings = styled.div`
	display: flex;
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
