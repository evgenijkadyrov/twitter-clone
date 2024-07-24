import { useSelector } from 'react-redux';

import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { useNotification } from '@/hooks/useNotification';
import { updateUserInfo } from '@/services/serviceAuth';
import { useAppDispatch } from '@/store';
import { userSelector } from '@/store/selectors';
import { User, userActions } from '@/store/userSlice';

export const useUpdateProfileInfo = () => {
	const { showSuccessNotification, showErrorNotification } = useNotification();
	const dispatch = useAppDispatch();
	const user = useSelector(userSelector);

	const updateProfileInfo = async (data: User) => {
		const { phoneNumber, name, email, nickname, description } = data;
		try {
			await updateUserInfo(phoneNumber, name, email, nickname, description, user.id);
			dispatch(
				userActions.updateUser({
					...user,
					name,
					phoneNumber,
					email,
					description,
					nickname,
				} as User)
			);
			showSuccessNotification(NotificationMessages.SUCCESS_UPDATE_PROFILE_INFO);
		} catch (error) {
			showErrorNotification(
				error,
				ErrorsResponseCode.EMAIL_ALREADY_IN_USE,
				NotificationMessages.ERROR_UPDATE_PROFILE
			);
		}
	};

	return updateProfileInfo;
};
