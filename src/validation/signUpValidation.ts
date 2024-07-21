import * as yup from 'yup';

export const validatePhone = (phone: number | string | undefined): boolean =>
	yup
		.number()
		.integer()
		.positive()
		.test((phone) => !!(phone && phone.toString().length >= 8 && phone.toString().length <= 14))
		.isValidSync(phone);

export const SignupSchema = yup.object().shape({
	name: yup
		.string()
		.min(3, 'Name must contain at least 3 character')
		.max(128, 'Name must contain maximum 128 characters')
		.required('Name is required'),
	phoneNumber: yup
		.string()
		.test('phone', ' Phone is invalid', (value) => validatePhone(parseInt(value ?? '0', 10)))
		.required('Phone number is required!'),
	password: yup
		.string()
		.min(6, 'Password must contain at least 6character')
		.max(128, 'Password must contain maximum 128 characters')
		.required('Password is required!'),
	email: yup.string().required('Email  is required'),
	month: yup.string().required('Month is required'),
	year: yup.string().required('Year is required'),
	day: yup.string().required('Day is required'),
});

export const UpdateSchema = yup.object().shape({
	name: yup
		.string()
		.min(3, 'Name must contain at least 3 character')
		.max(128, 'Name must contain maximum 128 characters')
		.required('Name is required'),
	phoneNumber: yup
		.string()
		.test('phone', ' Phone is invalid', (value) => validatePhone(parseInt(value ?? '0', 10)))
		.required('Phone number is required!'),

	email: yup.string().required('Email  is required'),
	nickname: yup.string(),
	description: yup.string(),
});
