import styled from 'styled-components';

import * as Sizes from '@/style/sizes';

export const NavList = styled.nav`
	padding-left: ${Sizes.PaddingSizes.p14};
	display: flex;
	flex-direction: column;
`;

export const Logo = styled.img`
	margin-bottom: ${Sizes.MarginSizes.m30};
	width: ${Sizes.WidthSizes.w40};
	height: ${Sizes.HeightSizes.h32};
`;

export const List = styled.ul`
	padding-bottom: ${Sizes.PaddingSizes.p32};
	display: flex;
	flex-direction: column;
`;
