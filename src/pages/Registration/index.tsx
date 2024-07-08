import { SubmitHandler, useForm } from 'react-hook-form';
import IconImage from '@assets/images/twitter.svg';
import { Input } from '@components/Input';
import { Select } from '@components/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { MONTH_NAMES } from '@/constants/monthNames';
import { Paths } from '@/constants/routerPaths';
import { AGE_TEXT_CONFIRM } from '@/constants/textConstant';
import { getListDaysOfMonth, getListOfYears } from '@/helpers';
import { formateDate } from '@/helpers/formateDate';
import { singUp } from '@/services/serviceAuth';
import { SignupSchema } from '@/validation/signUpValidation';

import {
	AgeConfirmText,
	Button,
	ButtonWrapper,
	ErrorMessage,
	Inputs,
	Logo,
	Section,
	SelectWrapper,
	StyledLink,
	SubTitle,
	Title,
	Wrapper,
} from './registration.styled';

type FormData = yup.InferType<typeof SignupSchema>;

export const Registration = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isValid, isDirty, isSubmitting },
	} = useForm<FormData>({
		resolver: yupResolver(SignupSchema),
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const { phoneNumber, name, password, email, day, month, year } = data;
		const birthDate = formateDate(day, month, year);
		try {
			await singUp(name, email, phoneNumber, password, birthDate);
		} catch (error) {
			console.log(error);
		} finally {
			reset();
		}
	};
	return (
		<Wrapper>
			<Section>
				<Logo src={IconImage as string} alt="logo" />
				<Title>Create an account</Title>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Inputs>
						<Input
							placeholder="Name"
							/* eslint-disable-next-line react/jsx-props-no-spreading */
							{...register('name')}
							errorMessage={errors.name?.message}
						/>
						<Input
							placeholder="Email"
							/* eslint-disable-next-line react/jsx-props-no-spreading */
							{...register('email')}
							errorMessage={errors.email?.message}
						/>
						<Input
							placeholder="Phone number"
							/* eslint-disable-next-line react/jsx-props-no-spreading */
							{...register('phoneNumber')}
							errorMessage={errors.phoneNumber?.message}
						/>
						<Input
							placeholder="Password"
							type="password"
							/* eslint-disable-next-line react/jsx-props-no-spreading */
							{...register('password')}
							errorMessage={errors.password?.message}
						/>
					</Inputs>
					<StyledLink to={Paths.HOME}>Use email</StyledLink>
					<SubTitle>Date of birth</SubTitle>
					<AgeConfirmText>{AGE_TEXT_CONFIRM}</AgeConfirmText>
					<SelectWrapper>
						<Select
							placeholder="Year"
							width="30%"
							options={getListOfYears()}
							/* eslint-disable-next-line react/jsx-props-no-spreading */
							{...register('year')}
						/>
						<Select
							placeholder="Month"
							width="40%"
							options={MONTH_NAMES}
							/* eslint-disable-next-line react/jsx-props-no-spreading */
							{...register('month')}
						/>
						<Select
							placeholder="Day"
							width="20%"
							options={getListDaysOfMonth()}
							/* eslint-disable-next-line react/jsx-props-no-spreading */
							{...register('day')}
						/>
					</SelectWrapper>
					<ErrorMessage>
						{errors.month && <p>{errors.month?.message || 'Error!'}</p>}
						{errors.month && <p>{errors.year?.message || 'Error!'}</p>}
						{errors.month && <p>{errors.day?.message || 'Error!'}</p>}
					</ErrorMessage>
					<ButtonWrapper>
						<Button
							type="submit"
							content="Continue"
							disabled={!isValid || !isDirty || isSubmitting}
						>
							Sing up
						</Button>
					</ButtonWrapper>
				</form>
			</Section>
		</Wrapper>
	);
};
