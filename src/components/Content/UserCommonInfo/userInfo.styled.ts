import AvatarDefault from '@assets/images/avatar.png';
import styled from 'styled-components';

import { MarginSizes } from '@/style/sizes';
import * as Sizes from '@/style/sizes';

const TOP_AVATAR_POSITION_P50 = '50px';
const TOP_AVATAR_POSITION_P30 = '30px';
const TOP_AVATAR_POSITION_P20 = '20px';
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
	color: ${({ theme }) => theme.textColor};
	@media screen and (max-width: 768px) {
		font-size: ${({ theme }) => theme.fontSize.f20};
	}
	@media screen and (max-width: 568px) {
		font-size: ${({ theme }) => theme.fontSize.f16};
	}
`;
export const NickName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f16};
	color: ${({ theme }) => theme.fontColors.grey};
	margin-top: ${MarginSizes.m05};
`;
export const UserDescription = styled.div`
	font-size: ${({ theme }) => theme.fontSize.f18};
	margin-top: ${MarginSizes.m15};
	color: ${({ theme }) => theme.textColor};
	@media screen and (max-width: 768px) {
		margin-top: ${MarginSizes.m10};
		font-size: ${({ theme }) => theme.fontSize.f16};
	}
	@media screen and (max-width: 568px) {
		margin-top: ${MarginSizes.m05};
		font-size: ${({ theme }) => theme.fontSize.f14};
	}
`;
interface AvatarProps {
	background_url: string;
}
export const Avatar = styled.div<AvatarProps>`
	position: relative;
	top: -${TOP_AVATAR_POSITION_P50};
	border-radius: 50%;
	width: ${Sizes.WidthSizes.w150};
	height: ${Sizes.HeightSizes.h150};
	background-image: url(${({ background_url }) => background_url || AvatarDefault});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	@media screen and (max-width: 768px) {
		width: ${Sizes.WidthSizes.w100};
		height: ${Sizes.HeightSizes.h100};
		top: -${TOP_AVATAR_POSITION_P30};
	}
	@media screen and (max-width: 568px) {
		width: ${Sizes.WidthSizes.w75};
		height: ${Sizes.HeightSizes.h75};
		top: -${TOP_AVATAR_POSITION_P20};
	}
`;
