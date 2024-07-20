import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const TweetContainer = styled.div`
	display: grid;
	grid-template-columns: 2fr 16fr 1fr;
	grid-gap: 10px;
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
`;
export const TweetText = styled.div`
	margin-top: ${Sizes.MarginSizes.m15};
	font-size: ${({ theme }) => theme.fontSize.f18};
`;
export const Settings = styled.div`
	display: flex;
	justify-content: flex-end;
`;
export const TweetWrapper = styled.div`
display: flex;
  flex-direction: column;
  margin-bottom: ${Sizes.MarginSizes.m20};
  &:after {
    position: absolute;
    left: 0;
    bottom: 10px;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.border};
  
`;
