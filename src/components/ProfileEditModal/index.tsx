import { Fragment, SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { FormData, ProfileEditModalProps } from '@components/ProfileEditModal/profileEdit.inteface';
import { TypeButton } from '@components/ui/Button/button.interface';
import { ErrorMessage } from '@components/ui/ErrorMessage';
import { Input } from '@components/ui/Input';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/ui/Button';
import { UPDATE_USER_INFO } from '@/constants/registrationFormData';
import { useUpdateProfileInfo } from '@/hooks/useUpdateProfileInfo';
import { Inputs } from '@/pages/Registration/registration.styled';
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
							<Fragment key={field.name}>
								<label htmlFor={field.name}>{field.placeholder}</label>
								<Input
									key={field.name}
									placeholder={field.placeholder}
									type={field.type}
									defaultValue={user[field.registerName] as string}
									/* eslint-disable-next-line react/jsx-props-no-spreading */
									{...register(field.registerName)}
								/>
								{errors[field.registerName] && (
									<ErrorMessage message={errors[field.registerName]?.message as string} />
								)}
							</Fragment>
						))}
					</Inputs>
					<Button
						type={TypeButton.submit}
						disabled={!isValid || !isDirty || isSubmitting}
						width="100%"
						color="primary"
					>
						Update
					</Button>
				</form>
				<ButtonClose onClick={closeModal}>X</ButtonClose>
			</Modal>
		</Container>,
		document.body
	);
};
