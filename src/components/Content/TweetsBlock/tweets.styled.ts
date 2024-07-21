import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

const TOP_POSITION = '50px';
const WIDTH_DIVIDER = '1px';
export const Title = styled.div`
  margin-left: ${Sizes.MarginSizes.m15};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSize.f18};
  height: ${Sizes.HeightSizes.h60};

  &:after {
    position: absolute;
    top: ${TOP_POSITION};
    left: 0;
    content: '';
    width: 50%;
    height: ${WIDTH_DIVIDER};
    background-color: ${({ theme }) => theme.border};
  }

}
`;
export const TweetWrapper = styled.div`
	position: relative;
`;
