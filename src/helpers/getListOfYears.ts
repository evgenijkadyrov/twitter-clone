const LIST_OF_YEARS_LENGTH = 99;
export const getListOfYears = (): string[] => {
	const years: string[] = [];
	const currentYear = new Date().getFullYear();

	let i = currentYear;
	do {
		years.push(i.toString());
		i -= 1;
	} while (i >= currentYear - LIST_OF_YEARS_LENGTH);

	return years;
};
