import { useCallback } from 'react';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';
import {
	collection,
	endAt,
	getDocs,
	limit,
	onSnapshot,
	orderBy,
	query,
	startAt,
} from 'firebase/firestore';

import { DbCollection } from '@/constants/textConstant';
import { db } from '@/firebase';
import { getErrorMessage } from '@/helpers/getErrorMessage';
import { useAppDispatch } from '@/store';
import { loadingActions } from '@/store/loadingSlice';
import { notificationActions } from '@/store/notificationSlice';
import { User, UserWithFollow } from '@/store/userSlice';

const NUMBER_OF_RECOMMENDATION_USER = 3;

interface UseUsersProps {
	setUsersByRecommendation: (users: UserWithFollow[]) => void;
	debouncedValue: string;
	setData: (data: User[] | TweetResponse[]) => void;
}

interface UseUsers {
	getRecommendationUsers: () => void;
	getSearchUsers: () => Promise<void>;
}

export const useUsers = ({
	setUsersByRecommendation,
	debouncedValue,
	setData,
}: UseUsersProps): UseUsers => {
	const dispatch = useAppDispatch();
	const getRecommendationUsers = useCallback(() => {
		try {
			dispatch(loadingActions.setLoading(true));
			const usersFirstQuery = query(
				collection(db, DbCollection.users),
				limit(NUMBER_OF_RECOMMENDATION_USER)
			);
			return onSnapshot(usersFirstQuery, (querySnapshot) => {
				const userData = querySnapshot.docs.map((doc) => {
					const user = doc.data() as User;
					return { ...user, follow: false };
				});

				setUsersByRecommendation(userData as UserWithFollow[]);
			});
		} catch (error) {
			dispatch(notificationActions.showError({ error: getErrorMessage(error) }));
			throw error;
		} finally {
			dispatch(loadingActions.setLoading(false));
		}
	}, [dispatch, setUsersByRecommendation]);
	const getSearchUsers = useCallback(async () => {
		try {
			dispatch(loadingActions.setLoading(true));
			if (debouncedValue.trim() === '') {
				setData([]);
				dispatch(loadingActions.setLoading(false));
				return;
			}
			const usersFirstQuery = query(
				collection(db, DbCollection.users),
				orderBy('name', 'asc'),
				startAt(debouncedValue),
				endAt(`${debouncedValue}\uf8ff`)
			);
			const userSnapshot = await getDocs(usersFirstQuery);
			const userData = userSnapshot.docs.map((doc) => doc.data());
			setData(userData as User[]);
			dispatch(loadingActions.setLoading(false));
		} catch (error) {
			dispatch(notificationActions.showError({ error: getErrorMessage(error) }));
		}
	}, [dispatch, setData, debouncedValue]);
	return { getRecommendationUsers, getSearchUsers };
};
