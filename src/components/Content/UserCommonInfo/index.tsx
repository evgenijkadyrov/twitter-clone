import { useSelector } from 'react-redux';
import { Button } from '@components/Button';
import { TypeButton } from '@components/Button/button.interface';

import { userSelector } from '@/store/selectors';

import {
	Avatar,
	CommonInfo,
	NickName,
	ProfileInfo,
	UserDescription,
	UserName,
} from './userInfo.styled';

interface UserCommonInfoProps {
	openModal: () => void;
}
export const UserCommonInfo = ({ openModal }: UserCommonInfoProps) => {
	const { nickname, name, description, avatarImage } = useSelector(userSelector);
	return (
		<CommonInfo>
			<ProfileInfo>
				<Avatar background_url={avatarImage as string} />
				<UserName>{name}</UserName>
				<NickName>{nickname}</NickName>
				<UserDescription>{description} </UserDescription>
			</ProfileInfo>
			<Button color="disabled" width="20%" onClick={openModal} type={TypeButton.button}>
				Edit profile
			</Button>
		</CommonInfo>
	);
};
