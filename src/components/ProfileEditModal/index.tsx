import { FC, SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Input } from '@components/Input';
import { FormData, ProfileEditModalProps } from '@components/ProfileEditModal/profileEdit.inteface';
import { yupResolver } from '@hookform/resolvers/yup';

import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { UPDATE_USER_INFO } from '@/constants/registrationFormData';
import { handleFirebaseError } from '@/helpers/firebaseErrors';
import { Button, ButtonWrapper, Inputs } from '@/pages/Registration/registration.styled';
import { updateUserInfo } from '@/services/serviceAuth';
import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';
import { userSelector } from '@/store/selectors';
import { User, userActions } from '@/store/userSlice';
import { UpdateSchema } from '@/validation/signUpValidation';

import { ButtonClose, Container, ErrorStyled, FormTitle, Modal } from './profileEdit.styled';

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => <ErrorStyled>{message}</ErrorStyled>;
export const ProfileEditModal = ({ closeModal }: ProfileEditModalProps) => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isValid, isDirty, isSubmitting },
	} = useForm<FormData>({
		resolver: yupResolver(UpdateSchema),
		mode: 'onBlur',
	});
	const dispatch = useAppDispatch();
	const user = useSelector(userSelector);

	const onSubmit: SubmitHandler<FormData> = async (data) => {
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
			dispatch(
				notificationActions.showSuccess({
					success: NotificationMessages.SUCCESS_UPDATE_PROFILE_INFO,
				})
			);
		} catch (error: unknown) {
			dispatch(
				notificationActions.showError(
					handleFirebaseError(
						error,
						ErrorsResponseCode.EMAIL_ALREADY_IN_USE,
						NotificationMessages.ERROR_UPDATE_PROFILE
					)
				)
			);
		} finally {
			reset();
			closeModal();
		}
	};
	const closeOutside = (e: SyntheticEvent): void => {
		if (e.currentTarget === e.target) {
			closeModal();
		}
	};
	return createPortal(
		<Container onClick={closeOutside}>
			<Modal>
				<FormTitle>Update user info</FormTitle>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Inputs>
						{UPDATE_USER_INFO.map((field) => (
							<>
								<label htmlFor={field.name}>{field.placeholder}</label>
								<Input
									key={field.name}
									placeholder={field.placeholder}
									type={field.type}
									defaultValue={user[field.registerName] as string}
									/* eslint-disable-next-line react/jsx-props-no-spreading */
									{...register(field.registerName)}
									// errorMessage={errors.root?.message}
								/>
								{errors[field.registerName] && (
									<ErrorMessage message={errors[field.registerName]?.message as string} />
								)}
							</>
						))}
					</Inputs>
					<ButtonWrapper>
						<Button type="submit" disabled={!isValid || !isDirty || isSubmitting}>
							Update
						</Button>
					</ButtonWrapper>
				</form>
				<ButtonClose onClick={closeModal}>X</ButtonClose>
			</Modal>
		</Container>,
		document.body
	);
};
interface ErrorMessageProps {
	message: string;
}
