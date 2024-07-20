import {
	collection,
	endAt,
	getDocs,
	limit,
	onSnapshot,
	orderBy,
	query,
	startAt,
	Unsubscribe,
} from 'firebase/firestore';

import { db } from '@/firebase';
import { User, UserWithFollow } from '@/store/userSlice';

const NUMBER_OF_RECOMMENDATION_USER = 3;

interface UseUsersProps {
	setUsersByRecommendation: (users: UserWithFollow[]) => void;
	debouncedValue: string;
	setUsersBySearch: (users: User[]) => void;
}

interface UseUsers {
	getRecommendationUsers: () => void;
	getSearchUsers: () => Promise<void>;
}

export const useUsers = ({
	setUsersByRecommendation,
	debouncedValue,
	setUsersBySearch,
}: UseUsersProps): UseUsers => {
	const getRecommendationUsers = (): Unsubscribe => {
		try {
			const usersFirstQuery = query(collection(db, 'users'), limit(NUMBER_OF_RECOMMENDATION_USER));
			return onSnapshot(usersFirstQuery, (querySnapshot) => {
				const userData = querySnapshot.docs.map((doc) => {
					const user = doc.data() as User;
					return { ...user, follow: false };
				});

				setUsersByRecommendation(userData as UserWithFollow[]);
			});
		} catch (error) {
			console.log('Error getting users: ', error);
			throw error;
		}
	};
	const getSearchUsers = async () => {
		try {
			const usersFirstQuery = query(
				collection(db, 'users'),
				orderBy('name', 'asc'),
				startAt(debouncedValue),
				endAt(`${debouncedValue}\uf8ff`)
			);
			const userSnapshot = await getDocs(usersFirstQuery);
			const userData = userSnapshot.docs.map((doc) => doc.data());
			setUsersBySearch(userData as User[]);
		} catch (error) {
			console.log('Error getting users: ', error);
		}
	};
	return { getRecommendationUsers, getSearchUsers };
};
