import AvatarDefault from '@assets/images/avatar.png';
import styled from 'styled-components';

import { MarginSizes } from '@/style/sizes';
import * as Sizes from '@/style/sizes';

export const CommonInfo = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: ${MarginSizes.m15};
`;
export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: ${MarginSizes.m15};
`;
export const UserName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f24};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	margin-top: ${MarginSizes.m05};
`;
export const NickName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	color: ${({ theme }) => theme.fontColors.grey};
	margin-top: ${MarginSizes.m05};
`;
export const UserDescription = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f18};
	margin-top: ${MarginSizes.m15};
`;
interface AvatarProps {
	background_url: string;
}
export const Avatar = styled.div<AvatarProps>`
	position: relative;
	top: -50px;
	border-radius: 50%;
	width: ${Sizes.WidthSizes.w150};
	height: ${Sizes.HeightSizes.h150};
	background-image: url(${({ background_url }) => background_url || AvatarDefault});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;
