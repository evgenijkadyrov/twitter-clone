import * as yup from 'yup';

export const validatePhone = (phone: number | string | undefined): boolean =>
	yup
		.number()
		.integer()
		.positive()
		.test(
			'Not correct number of symbol',
			(phone) => !!(phone && phone.toString().length >= 12 && phone.toString().length <= 13)
		)
		.isValidSync(phone);
