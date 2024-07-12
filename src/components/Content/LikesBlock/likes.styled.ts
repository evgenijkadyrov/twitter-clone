import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

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