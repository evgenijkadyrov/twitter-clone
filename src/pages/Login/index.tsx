import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AvatarIcon from '@/assets/images/avatar.png';
import IconImage from '@/assets/images/twitter.svg';
import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { Paths } from '@/constants/routerPaths';
import { handleFirebaseError } from '@/helpers/firebaseErrors';
import { login, LoginFormFields } from '@/services/serviceAuth';
import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';
import { userActions } from '@/store/userSlice';
import { LoginSchema } from '@/validation/loginValidation';

import {
	Button,
	ButtonWrapper,
	Inputs,
	Logo,
	Section,
	StyledLink,
	Title,
	Wrapper,
} from './login.styled';

type FormData = yup.InferType<typeof LoginSchema>;

export const Login = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isValid, isDirty, isSubmitting },
	} = useForm<FormData>({
		resolver: yupResolver(LoginSchema),
		mode: 'onBlur',
	});
	const dispatch = useAppDispatch();
	const onSubmit: SubmitHandler<FormData> = async (data: LoginFormFields): Promise<void> => {
		try {
			const { userData, uid, token } = await login(data);
			dispatch(
				userActions.fetchUser({
					name: (userData?.data.name as string) || null,
					phoneNumber: (userData?.data.phoneNumber as string) || null,
					email: (userData?.data.email as string) || null,
					id: uid,
					token: token || null,
					birthDate: (userData?.data.birthDate as string) || null,
					// description: (userData?.data.description as string) || null,
					nickname: (userData?.data.nickname as string) || null,
					avatarImage: (userData?.data.avatarImage as string) || AvatarIcon,
				})
			);
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
						<Button type="submit" content="Log In" disabled={!isValid || !isDirty || isSubmitting}>
							Log in
						</Button>
					</ButtonWrapper>
				</form>
				<StyledLink to={Paths.REGISTRATION}>Sign up to Twitter</StyledLink>
			</Section>
		</Wrapper>
	);
};
