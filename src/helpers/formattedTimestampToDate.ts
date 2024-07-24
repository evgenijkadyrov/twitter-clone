import { Timestamp } from 'firebase/firestore';

export const formattedDate = (createdAt: Timestamp): string => {
	if (createdAt) {
		const date = createdAt.toDate();
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
		});
	}
	return '';
};
