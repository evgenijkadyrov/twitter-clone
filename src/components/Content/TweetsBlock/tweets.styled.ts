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
