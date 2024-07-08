import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
	phoneOrEmail: yup.string().required('Email / Phone is required'),
	password: yup
		.string()
		.min(3, 'Password must contain at least 3 character')
		.max(128, 'Password must contain maximum 128 characters')
		.required('Password is required!'),
});