import { MONTH_NAMES } from '@/constants/monthNames';
import { getListDaysOfMonth, getListOfYears } from '@/helpers';

interface BirthDateSelectedFields {
	name: 'year' | 'month' | 'day';
	placeholder: string;
	width: string;
	options: string[];
}
export const BIRTHDATE_SELECTED_FIELDS: BirthDateSelectedFields[] = [
	{
		name: 'year',
		placeholder: 'Year',
		width: '30%',
		options: getListOfYears(),
	},
	{
		name: 'month',
		placeholder: 'Month',
		width: '40%',
		options: MONTH_NAMES,
	},
	{
		name: 'day',
		placeholder: 'Day',
		width: '20%',
		options: getListDaysOfMonth(),
	},
];
