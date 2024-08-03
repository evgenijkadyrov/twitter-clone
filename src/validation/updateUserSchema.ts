import * as yup from 'yup';

import { validatePhone } from '@/validation/validatePhone';

export const updateSchema = yup.object().shape({
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
