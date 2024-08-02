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
		name: 'password',
		placeholder: 'Password',
		type: 'password',
		registerName: 'password',
	},
];
export interface UserUpdateProps {
	name: 'name' | 'phoneNumber' | 'email' | 'nickname' | 'description';
	placeholder: string;
	registerName: 'name' | 'phoneNumber' | 'email' | 'nickname' | 'description';
	type: 'text' | 'password';
}
export const UPDATE_USER_INFO: UserUpdateProps[] = [
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
		name: 'nickname',
		placeholder: 'Nickname',
		type: 'text',
		registerName: 'nickname',
	},
	{
		name: 'description',
		placeholder: 'Description',
		type: 'text',
		registerName: 'description',
	},
];
