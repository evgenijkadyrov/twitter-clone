import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Row = styled.div`
	display: flex;
	align-items: center;
`;
export const ProfileInfo = styled.div`
	width: 150px;
	display: flex;
	flex-direction: column;
	margin: ${Sizes.MarginSizes.m20} ${Sizes.MarginSizes.m40} ${Sizes.MarginSizes.m20}
		${Sizes.MarginSizes.m20};
`;

export const SubTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	color: ${({ theme }) => theme.fontColors.grey};
`;
export const TitleProfile = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	color: ${({ theme }) => theme.textColor};
`;
export const TitleForRecommended = styled.p`
	color: ${({ theme }) => theme.textColor};
	margin-top: ${Sizes.MarginSizes.m20};
	font-size: ${({ theme }) => theme.fontSize.f24};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
