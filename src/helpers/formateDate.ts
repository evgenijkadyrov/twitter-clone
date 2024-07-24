export const formateDate = (
	day: string | undefined,
	month: string | undefined,
	year: string | undefined
): string => {
	if (year !== undefined && month !== undefined && day !== undefined) {
		return `${year}-${month}-${day}`;
	}
	return '';
};
