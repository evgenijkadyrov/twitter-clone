import { useNavigate } from 'react-router-dom';
import defaultAvatar from '@assets/images/avatar.png';
import { Avatar } from '@components/SearchBar/SearchContainer/searchContainer.styled';

import { Paths } from '@/constants/routerPaths';

import { UserNameBlockProps } from './userBlock.interface';
import { ProfileInfo, Row, SubTitle, TitleProfile } from './userNameBlock.styled';

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
		if (clearSearch) {
			clearSearch();
		}
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
