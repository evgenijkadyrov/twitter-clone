import * as yup from 'yup';

export const loginSchema = yup.object().shape({
	phoneOrEmail: yup.string().required('Email / Phone is required'),
	password: yup
		.string()
		.min(6, 'Password must contain at least 6 character')
		.max(128, 'Password must contain maximum 128 characters')
		.required('Password is required!'),
});
