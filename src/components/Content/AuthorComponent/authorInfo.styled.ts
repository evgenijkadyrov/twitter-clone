import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const AuthorInfo = styled.div`
	display: flex;
	gap: ${Sizes.GapSizes.g15};
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
