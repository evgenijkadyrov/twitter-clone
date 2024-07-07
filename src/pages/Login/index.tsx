import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import IconImage from '@/assets/images/twitter.svg';
import { Paths } from '@/constants/routerPaths';

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

export interface SignInFormFields {
	phoneOrEmail: string;
	password: string;
}
type FormData = yup.InferType<typeof SignupSchema>;

const SignupSchema = yup.object().shape({
	phoneOrEmail: yup.string().required('Email / Phone is required'),
	password: yup
		.string()
		.min(3, 'Password must contain at least 3 character')
		.max(128, 'Password must contain maximum 128 characters')
		.required('Password is required!'),
});
export const Login = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isValid, isDirty, isSubmitting },
	} = useForm<FormData>({
		resolver: yupResolver(SignupSchema),
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
						<Button
							type="submit"
							primary
							content="Log In"
							disabled={!isValid || !isDirty || isSubmitting}
						>
							Log in
						</Button>
					</ButtonWrapper>
				</form>
				<StyledLink to={Paths.REGISTRATION}>Sign up to Twitter</StyledLink>
			</Section>
		</Wrapper>
	);
};
