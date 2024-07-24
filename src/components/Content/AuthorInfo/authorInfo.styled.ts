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
	@media screen and (max-width: 768px) {
		font-size: ${({ theme }) => theme.fontSize.f18};
	}
	@media screen and (max-width: 568px) {
		font-size: ${({ theme }) => theme.fontSize.f14};
	}
`;
export const AuthorNickName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f18};
	color: ${({ theme }) => theme.fontColors.grey};
	@media screen and (max-width: 768px) {
		font-size: ${({ theme }) => theme.fontSize.f16};
	}
	@media screen and (max-width: 568px) {
		font-size: ${({ theme }) => theme.fontSize.f14};
	}
`;
export const TweetCreatedAt = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f18};
	color: ${({ theme }) => theme.fontColors.grey};
	flex-wrap: wrap;
	@media screen and (max-width: 768px) {
		font-size: ${({ theme }) => theme.fontSize.f16};
	}
	@media screen and (max-width: 568px) {
		font-size: ${({ theme }) => theme.fontSize.f14};
	}
`;
