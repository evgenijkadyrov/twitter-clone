import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Title = styled.div`
  margin-left: ${Sizes.MarginSizes.m15};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSize.f18};
  height: ${Sizes.HeightSizes.h60};

  &:after {
    position: absolute;
    top: 50px;
    left: 0;
    content: '';
    width: 50%;
    height: 1px;
    background-color: ${({ theme }) => theme.border};
  }

}
`;
export const TweetWrapper = styled.div`
	position: relative;
`;

export const TweetContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 16fr 1fr;
  grid-gap: 10px;
  margin-bottom: ${Sizes.MarginSizes.m10};
  position: relative;
  
  }
`;
export const AuthorInfo = styled.div`
	display: flex;
	gap: ${Sizes.GapSizes.g15};
`;
export const Tweet = styled.div`
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
export const AuthorName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f20};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const AuthorNickName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f18};
	color: ${({ theme }) => theme.fontColors.grey};
`;
export const TweetCreatedAt = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f18};
	color: ${({ theme }) => theme.fontColors.grey};
`;
export const TweetText = styled.div`
	margin-top: ${Sizes.MarginSizes.m15};
	font-size: ${({ theme }) => theme.fontSize.f18};
`;
export const LikesBlock = styled.div`
  display:flex;
  margin-top: ${Sizes.MarginSizes.m15};
  gap:gap:${Sizes.GapSizes.g15}
`;
export const LikeIcon = styled.img`
	margin-right: 10px;

	cursor: pointer;
`;
export const LikeCount = styled.p`
	@media screen and (max-width: 550px) {
		font-size: ${({ theme }) => theme.fontSize.f14};
	}
`;
export const Settings = styled.div`
	display: flex;
	justify-content: flex-end;
`;
