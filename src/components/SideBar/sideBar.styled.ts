import styled from 'styled-components';

import { ScreenWidth } from '@/style/screenWidth';

export const SideBar = styled.div`
	background-color: #888888;
	display: flex;
	flex-basis: 10%;

	@media screen and (max-width: ${ScreenWidth.iPad}) {
		flex-basis: 5%;
	}
`;
