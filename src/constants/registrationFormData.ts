interface RegistrationProps {
	name: 'name' | 'phoneNumber' | 'email' | 'month' | 'password' | 'year' | 'day';
	placeholder: string;
	registerName: 'name' | 'phoneNumber' | 'email' | 'month' | 'password' | 'year' | 'day';
	type: 'text' | 'password';
}

export const REGISTRATION_FORM_DATA: RegistrationProps[] = [
	{
		name: 'name',
		placeholder: 'Name',
		registerName: 'name',
		type: 'text',
	},
	{
		name: 'email',
		placeholder: 'Email',
		registerName: 'email',
		type: 'text',
	},
	{
		name: 'phoneNumber',
		placeholder: 'Phone number',
		registerName: 'phoneNumber',
		type: 'text',
	},
	{
		name: 'password',
		placeholder: 'Password',
		type: 'password',
		registerName: 'password',
	},
];
