export const calculateIfIsLiked = (data: string[], id: string | null) => {
	if (id !== null) {
		return data.some((el) => el === id);
	}
	return false;
};
