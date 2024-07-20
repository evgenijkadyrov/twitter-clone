import { ReactNode } from 'react';
import defaultAvatar from '@assets/images/avatar.png';
import { Avatar } from '@components/SearchBar/SearchContainer/searchContainer.styled';

import { ProfileInfo, Row, SubTitle, TitleProfile } from './userNameBlock.styled';

interface UserNameBlockProps {
	name?: string | null | undefined;
	nickname?: string | null | undefined;
	avatarImage?: string | null | undefined;
	id?: string | null | undefined;
	children?: ReactNode;
}

export const UserNameBlock = ({
	name,
	nickname,
	avatarImage,
	id,
	children,
}: UserNameBlockProps) => (
	<Row key={id}>
		<Avatar background_url={avatarImage || defaultAvatar} />
		<ProfileInfo>
			<TitleProfile>{name}</TitleProfile>
			<SubTitle>{nickname}</SubTitle>
		</ProfileInfo>
		{children}
	</Row>
);
