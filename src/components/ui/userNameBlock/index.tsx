import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '@assets/images/avatar.png';
import { Avatar } from '@components/SearchBar/SearchContainer/searchContainer.styled';

import { Paths } from '@/constants/routerPaths';

import { ProfileInfo, Row, SubTitle, TitleProfile } from './userNameBlock.styled';

interface UserNameBlockProps {
	name?: string | null | undefined;
	nickname?: string | null | undefined;
	avatarImage?: string | null | undefined;
	id?: string | null | undefined;
	clearSearch: () => void;
	children?: ReactNode;
}

export const UserNameBlock = ({
	name,
	nickname,
	avatarImage,
	id,
	clearSearch,
	children,
}: UserNameBlockProps) => {
	const navigate = useNavigate();
	const profileClickHandler = (id: string) => (): void => {
		navigate(`${Paths.PROFILE}/${id}`);
		clearSearch();
	};
	return (
		<Row key={id}>
			<Avatar background_url={avatarImage || defaultAvatar} />
			<ProfileInfo onClick={profileClickHandler(id as string)}>
				<TitleProfile>{name}</TitleProfile>
				<SubTitle>{nickname}</SubTitle>
			</ProfileInfo>
			{children}
		</Row>
	);
};
