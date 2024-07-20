import { handleFirebaseError } from '@/helpers/firebaseErrors';
import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';

interface NotificationHook {
	showSuccessNotification: (successMessage: string) => void;
	showErrorNotification: (error: unknown, errorCode: string, errorMessage: string) => void;
}

export const useNotification = (): NotificationHook => {
	const dispatch = useAppDispatch();

	const showSuccessNotification = (successMessage: string): void => {
		dispatch(notificationActions.showSuccess({ success: successMessage }));
	};

	const showErrorNotification = (error: unknown, errorCode: string, errorMessage: string): void => {
		const errorNotification = handleFirebaseError(error, errorCode, errorMessage);
		dispatch(notificationActions.showError(errorNotification));
	};

	return { showSuccessNotification, showErrorNotification };
};
