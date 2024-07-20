import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from '@components/NavBar';
import { TweetModal } from '@components/TweetModal';

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
	const [isOpenModal, setIsOpenModal] = useState(false);
	const dispatch = useAppDispatch();

	const modalClickHandler = (): void => {
		setIsOpenModal((prev) => !prev);
	};

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
			<Button onClick={modalClickHandler}>Tweet</Button>
			{name && (
				<Row>
					{avatarImage && <Avatar background_url={avatarImage} alt="icon" />}
					<ProfileInfo>
						<Title>{name}</Title>
						<SubTitle>{nickname}</SubTitle>
					</ProfileInfo>
				</Row>
			)}
			<Button color="disabled" onClick={handleLogout}>
				Log out
			</Button>
			{isOpenModal && <TweetModal closeModal={modalClickHandler} />}
		</SideBarWrapper>
	);
};
