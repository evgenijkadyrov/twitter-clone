import { SubmitHandler, useForm } from 'react-hook-form';
import IconImage from '@assets/images/twitter.svg';
import { Input } from '@components/Input';
import { Select } from '@components/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { BIRTHDATE_SELECTED_FIELDS } from '@/constants/birthDateSelectedFields';
import { REGISTRATION_FORM_DATA } from '@/constants/registrationFormData';
import { Paths } from '@/constants/routerPaths';
import { AGE_TEXT_CONFIRM } from '@/constants/textConstant';
import { formateDate } from '@/helpers/formateDate';
import { RegistrationFormData } from '@/pages/Registration/registration.interface';
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
		const { phoneNumber, name, password, email, day, month, year }: RegistrationFormData = data;
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
						{REGISTRATION_FORM_DATA.map((field) => (
							<Input
								key={field.name}
								placeholder={field.placeholder}
								type={field.type}
								/* eslint-disable-next-line react/jsx-props-no-spreading */
								{...register(field.registerName)}
								errorMessage={errors.root?.message}
							/>
						))}
					</Inputs>
					<StyledLink to={Paths.HOME}>Use email</StyledLink>
					<SubTitle>Date of birth</SubTitle>
					<AgeConfirmText>{AGE_TEXT_CONFIRM}</AgeConfirmText>
					<SelectWrapper>
						{BIRTHDATE_SELECTED_FIELDS.map((field) => (
							<Select
								key={field.name}
								placeholder={field.placeholder}
								width={field.width}
								options={field.options}
								/* eslint-disable-next-line react/jsx-props-no-spreading */
								{...register(field.name)}
							/>
						))}
					</SelectWrapper>
					<ErrorMessage>
						{Object.keys(errors).map((fieldName) => (
							<p key={fieldName}>{errors.root?.message || `Error ${fieldName}!`}</p>
						))}
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
