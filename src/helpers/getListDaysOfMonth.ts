const DAYS_IN_MONTH = 31;

export const getListDaysOfMonth = (): string[] => {
	const days: string[] = [];

	for (let i = 1; i <= DAYS_IN_MONTH; i += 1) {
		days.push(i.toString());
	}

	return days;
};
