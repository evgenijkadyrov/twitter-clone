import React, { useEffect } from 'react';
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

export const Notification = () => {
	const { error, success } = useSelector(notificationSelector);

	const dispatch = useAppDispatch();
	useEffect(() => {
		let errorTimeout: NodeJS.Timeout;
		if (error || success) {
			errorTimeout = setTimeout(() => {
				dispatch(notificationActions.clearNotification());
			}, 3000);
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
