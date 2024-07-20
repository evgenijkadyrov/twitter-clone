import { SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { FormData, ProfileEditModalProps } from '@components/ProfileEditModal/profileEdit.inteface';
import { ErrorMessage } from '@components/ui/ErrorMessage';
import { Input } from '@components/ui/Input';
import { yupResolver } from '@hookform/resolvers/yup';

import { UPDATE_USER_INFO } from '@/constants/registrationFormData';
import { useUpdateProfileInfo } from '@/hooks/useUpdateProfileInfo';
import { Button, ButtonWrapper, Inputs } from '@/pages/Registration/registration.styled';
import { userSelector } from '@/store/selectors';
import { User } from '@/store/userSlice';
import { UpdateSchema } from '@/validation/signUpValidation';

import { ButtonClose, Container, FormTitle, Modal } from './profileEdit.styled';

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
	const user = useSelector(userSelector);
	const updateProfileInfo = useUpdateProfileInfo();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		await updateProfileInfo(data as User);
		reset();
		closeModal();
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
