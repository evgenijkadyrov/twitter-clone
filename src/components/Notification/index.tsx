import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';
import { notificationSelector } from '@/store/selectors';

import {
	CloseButton,
	ErrorWrapper,
	NotificationWrapper,
	SuccessWrapper,
} from './notification.styled';

const TIME_SHOW_NOTIFICATION = 3000;

export const Notification = () => {
	const { error, success } = useSelector(notificationSelector);

	const dispatch = useAppDispatch();
	useEffect(() => {
		let errorTimeout: NodeJS.Timeout;
		if (error || success) {
			errorTimeout = setTimeout(() => {
				dispatch(notificationActions.clearNotification());
			}, TIME_SHOW_NOTIFICATION);
		}
		return () => {
			clearTimeout(errorTimeout);
		};
	}, [error, success, dispatch]);

	const handleClose = (): void => {
		dispatch(notificationActions.clearNotification());
	};
	return error || success ? (
		<NotificationWrapper>
			{error && <ErrorWrapper>{error}</ErrorWrapper>}
			{success && <SuccessWrapper>{success}</SuccessWrapper>}
			<CloseButton onClick={handleClose}>X</CloseButton>
		</NotificationWrapper>
	) : null;
};
