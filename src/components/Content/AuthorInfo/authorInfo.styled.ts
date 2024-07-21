import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const AuthorInfoWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: ${Sizes.GapSizes.g10};
`;

export const AuthorName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f20};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	color: ${({ theme }) => theme.textColor};
`;
export const AuthorNickName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f18};
	color: ${({ theme }) => theme.fontColors.grey};
`;
export const TweetCreatedAt = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f18};
	color: ${({ theme }) => theme.fontColors.grey};
	flex-wrap: wrap;
`;
