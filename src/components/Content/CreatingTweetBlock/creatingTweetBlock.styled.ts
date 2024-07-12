import AvatarDefault from '@assets/images/avatar.png';
import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 5fr 1fr;
	grid-gap: 10px;
`;
export const Divider = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 1px;
	margin: 20px 0;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${({ theme }) => theme.border};
	}
`;
interface AvatarProps {
	background_url: string;
}
export const Avatar = styled.div<AvatarProps>`
	text-align: center;
	border-radius: 50%;
	width: ${Sizes.WidthSizes.w50};
	height: ${Sizes.HeightSizes.h50};
	background-image: url(${({ background_url }) => background_url || AvatarDefault});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	margin-left: ${Sizes.MarginSizes.m15};
`;
export const StyledTextarea = styled.textarea`
	font-size: ${({ theme }) => theme.fontSize.f20};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	color: ${({ theme }) => theme.fontColors.grey};
	width: 100%;
	border: none;
`;
