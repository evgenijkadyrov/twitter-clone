import { useSelector } from 'react-redux';
import { NavBar } from '@components/NavBar';

import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { handleFirebaseError } from '@/helpers/firebaseErrors';
import { signOut } from '@/services/serviceAuth';
import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';
import { userSelector } from '@/store/selectors';
import { userActions } from '@/store/userSlice';

import {
	Avatar,
	Button,
	ProfileInfo,
	Row,
	SideBarWrapper,
	SubTitle,
	Title,
} from './sideBar.styled';

export const SideBar = () => {
	const { name, nickname, avatarImage } = useSelector(userSelector);

	const dispatch = useAppDispatch();
	const handleLogout = async () => {
		try {
			await signOut();
			dispatch(userActions.logout());
			dispatch(
				notificationActions.showSuccess({
					success: NotificationMessages.SUCCESS_LOGOUT,
				})
			);
		} catch (error: unknown) {
			dispatch(
				notificationActions.showError(
					handleFirebaseError(
						error,
						ErrorsResponseCode.UNKNOWN_ERROR,
						NotificationMessages.ERROR_LOGOUT
					)
				)
			);
		}
	};
	return (
		<SideBarWrapper>
			<NavBar />
			<Button>Tweet</Button>
			{name && (
				<Row>
					{avatarImage && <Avatar src={avatarImage} alt="icon" />}
					<ProfileInfo>
						<Title>{name}</Title>
						<SubTitle>{nickname}</SubTitle>
					</ProfileInfo>
				</Row>
			)}
			<Button color="disabled" onClick={handleLogout}>
				Log out
			</Button>
		</SideBarWrapper>
	);
};
