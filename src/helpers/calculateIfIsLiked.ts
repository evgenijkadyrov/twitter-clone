export const calculateIfIsLiked = (data: string[], id: string | null) =>
	data.some((el) => el === id);
