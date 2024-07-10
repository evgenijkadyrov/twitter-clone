import { NavBar } from '@components/NavBar';

import AvatarIcon from '@/assets/images/avatar.png';

import {
	Avatar,
	Button,
	ProfileInfo,
	Row,
	SideBarWrapper,
	SubTitle,
	Title,
} from './sideBar.styled';

export const SideBar = () => (
	<SideBarWrapper>
		<NavBar />
		<Button>Tweet</Button>
		<Row>
			<Avatar src={AvatarIcon} alt="icon" />
			<ProfileInfo>
				<Title>Bobur</Title>
				<SubTitle>@Boburmal</SubTitle>
			</ProfileInfo>
		</Row>
		<Button color="disabled">Log out</Button>
	</SideBarWrapper>
);
