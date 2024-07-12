import { useSelector } from 'react-redux';
import { Button } from '@components/Button';

import { userSelector } from '@/store/selectors';

import {
	Avatar,
	CommonInfo,
	NickName,
	ProfileInfo,
	UserDescription,
	UserName,
} from './userInfo.styled';

export const UserCommonInfo = () => {
	const { nickname, name, description, avatarImage } = useSelector(userSelector);
	return (
		<CommonInfo>
			<ProfileInfo>
				<Avatar background_url={avatarImage as string} />
				<UserName>{name}</UserName>
				<NickName>{nickname}</NickName>
				<UserDescription>{description} </UserDescription>
			</ProfileInfo>
			<Button color="disabled" width="20%">
				Edit profile
			</Button>
		</CommonInfo>
	);
};
