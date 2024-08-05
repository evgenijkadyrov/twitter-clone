import { SubmitHandler, useForm } from 'react-hook-form';
import { TypeButton } from '@components/ui/Button/button.interface';
import { Input } from '@components/ui/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import IconImage from '@/assets/images/twitter.svg';
import { Button } from '@/components/ui/Button';
import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { Paths } from '@/constants/routerPaths';
import { formatUserData } from '@/helpers';
import { handleFirebaseError } from '@/helpers/firebaseErrors';
import { LoginFormFields } from '@/services/interfaces';
import { login } from '@/services/serviceAuth';
import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';
import { userActions } from '@/store/userSlice';
import { loginSchema } from '@/validation/loginSchema';

import { ButtonWrapper, Inputs, Logo, Section, StyledLink, Title, Wrapper } from './login.styled';

type FormData = yup.InferType<typeof loginSchema>;
export const Login = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isValid, isDirty, isSubmitting },
	} = useForm<FormData>({
		resolver: yupResolver(loginSchema),
		mode: 'onBlur',
	});
	const dispatch = useAppDispatch();
	const onSubmit: SubmitHandler<FormData> = async (data: LoginFormFields): Promise<void> => {
		try {
			const { userData, uid, token } = await login(data);

			const formattedUserData = formatUserData(userData, uid, token);
			dispatch(userActions.fetchUser(formattedUserData));
			dispatch(
				notificationActions.showSuccess({
					success: NotificationMessages.SUCCESS_LOGIN,
				})
			);
			reset();
		} catch (error: unknown) {
			dispatch(
				notificationActions.showError(
					handleFirebaseError(
						error,
						ErrorsResponseCode.INVALID_CREDENTIALS,
						NotificationMessages.ERROR_LOGIN
					)
				)
			);
		}
	};
	return (
		<Wrapper>
			<Section>
				<Logo src={IconImage} alt="logo" />
				<Title>Log in to Twitter</Title>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Inputs>
						<Input
							placeholder="Phone number, email address"
							/* eslint-disable-next-line react/jsx-props-no-spreading */
							{...register('phoneOrEmail')}
							errorMessage={errors.phoneOrEmail?.message}
						/>
						<Input
							type="password"
							placeholder="Password"
							/* eslint-disable-next-line react/jsx-props-no-spreading */
							{...register('password')}
							errorMessage={errors.password?.message}
						/>
					</Inputs>
					<ButtonWrapper>
						<Button type={TypeButton.submit} disabled={!isValid || !isDirty || isSubmitting}>
							Log in
						</Button>
					</ButtonWrapper>
				</form>
				<StyledLink to={Paths.REGISTRATION}>Sign up to Twitter</StyledLink>
			</Section>
		</Wrapper>
	);
};
