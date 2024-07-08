import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import IconImage from '@/assets/images/twitter.svg';
import { Paths } from '@/constants/routerPaths';
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
	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
		reset();
	};
	return (
		<Wrapper>
			<Section>
				<Logo src={IconImage as string} alt="logo" />
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
