import { SubmitHandler, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input/react-hook-form-input';
import IconImage from '@assets/images/twitter.svg';
import { Select } from '@components/Select';
import { TypeButton } from '@components/ui/Button/button.interface';
import { Input } from '@components/ui/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '@/components/ui/Button';
import { BIRTHDATE_SELECTED_FIELDS } from '@/constants/birthDateSelectedFields';
import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { REGISTRATION_FORM_DATA } from '@/constants/registrationFormData';
import { Paths } from '@/constants/routerPaths';
import { AGE_TEXT_CONFIRM } from '@/constants/textConstant';
import { formateDate } from '@/helpers/formateDate';
import { useNotification } from '@/hooks/useNotification';
import { RegistrationFormData } from '@/pages/Registration/registration.interface';
import { singUp } from '@/services/serviceAuth';
import { useAppDispatch } from '@/store';
import { userActions } from '@/store/userSlice';
import { signupSchema } from '@/validation/signupSchema';
import { validatePhone } from '@/validation/validatePhone';

import {
	AgeConfirmText,
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

type FormData = yup.InferType<typeof signupSchema>;
export const Registration = () => {
	const {
		handleSubmit,
		register,
		reset,
		control,
		formState: { errors, isValid, isDirty, isSubmitting },
	} = useForm<FormData>({
		resolver: yupResolver(signupSchema),
		mode: 'onBlur',
	});
	const dispatch = useAppDispatch();
	const { showSuccessNotification, showErrorNotification } = useNotification();
	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const { phoneNumber, name, password, email, day, month, year }: RegistrationFormData = data;
		const birthDate = formateDate(day, month, year);
		try {
			const { uid, token } = await singUp(name, email, phoneNumber, password, birthDate);
			dispatch(
				userActions.fetchUser({
					name: name || null,
					phoneNumber: phoneNumber || null,
					email: email || null,
					id: uid,
					token: token || null,
					birthDate: birthDate || null,
					description: null,
				})
			);
			showSuccessNotification(NotificationMessages.SUCCESS_REGISTRATION);
		} catch (error: unknown) {
			showErrorNotification(
				error,
				ErrorsResponseCode.EMAIL_ALREADY_IN_USE,
				NotificationMessages.ERROR_REGISTRATION
			);
		} finally {
			reset();
		}
	};
	return (
		<Wrapper>
			<Section>
				<Logo src={IconImage} alt="logo" />
				<Title>Create an account</Title>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Inputs>
						{REGISTRATION_FORM_DATA.map((field) => (
							<>
								<Input
									key={field.name}
									placeholder={field.placeholder}
									type={field.type}
									/* eslint-disable-next-line react/jsx-props-no-spreading */
									{...register(field.registerName)}
									errorMessage={errors.root?.message}
								/>
								<ErrorMessage>
									{Object.keys(errors).map(
										(fieldName) =>
											field.name === fieldName && (
												<p key={fieldName}>
													{errors[fieldName]?.message || `Required ${fieldName}!`}
												</p>
											)
									)}
								</ErrorMessage>
							</>
						))}
						<PhoneInput
							name="phoneNumber"
							control={control}
							inputComponent={Input}
							rules={{ required: true, validate: validatePhone }}
							placeholder="+375 99 9999999"
							errorMessage={errors.root?.message}
						/>
					</Inputs>
					<ErrorMessage>
						{Object.keys(errors).map((fieldName) => (
							<p key={fieldName}>{errors.root?.message || `Phone number not correct`}</p>
						))}
					</ErrorMessage>

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
						{Object.keys(errors).map((fieldName) => {
							if (fieldName === 'phoneNumber') {
								return false;
							}
							return <p key={fieldName}>{errors.root?.message || `Required ${fieldName}!`}</p>;
						})}
					</ErrorMessage>

					<ButtonWrapper>
						<Button type={TypeButton.submit} disabled={!isValid || !isDirty || isSubmitting}>
							Sing up
						</Button>
					</ButtonWrapper>
				</form>
			</Section>
		</Wrapper>
	);
};
