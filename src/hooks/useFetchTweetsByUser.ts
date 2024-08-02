import { useEffect, useState } from 'react';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';
import { collection, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';

import { DbCollection } from '@/constants/textConstant';
import { db } from '@/firebase';
import { getErrorMessage } from '@/helpers/getErrorMessage';
import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';
import { User } from '@/store/userSlice';

export const useFetchTweetsByUser = (id: string | null) => {
	const [tweets, setTweets] = useState<TweetResponse[]>([]);
	const dispatch = useAppDispatch();
	useEffect(() => {
		const getTweets = () => {
			let tweetQuery;
			if (id) {
				tweetQuery = query(
					collection(db, DbCollection.tweets),
					where('userId', '==', id),
					orderBy('createdAt', 'desc')
				);
			} else {
				tweetQuery = query(collection(db, DbCollection.tweets), orderBy('createdAt', 'desc'));
			}

			return onSnapshot(tweetQuery, async (querySnapshot) => {
				const tweetPromises = querySnapshot.docs.map(async (doc) => {
					const userDataQuery = query(
						collection(db, DbCollection.users),
						where('id', '==', doc.data().userId)
					);
					const userDataSnapshot = await getDocs(userDataQuery);
					const userData = userDataSnapshot.docs[0]?.data() as User;
					const { name, nickname, avatarImage }: User = userData;

					return {
						...doc.data(),
						id: doc.id,
						authorName: name,
						authorNickname: nickname,
						avatarImage,
					} as TweetResponse;
				});

				try {
					const tweets = await Promise.all(tweetPromises);
					const sortedTweets = tweets?.slice().sort((a, b) => {
						if (b.createdAt !== null && a.createdAt !== null) {
							return b.createdAt.seconds - a.createdAt.seconds;
						}
						return 0;
					});
					setTweets(sortedTweets);
				} catch (error) {
					dispatch(notificationActions.showError({ error: getErrorMessage(error) }));
				}
			});
		};

		const unsubscribe = getTweets();

		return () => {
			unsubscribe();
		};
	}, [id]);

	return {
		tweets,
	};
};
