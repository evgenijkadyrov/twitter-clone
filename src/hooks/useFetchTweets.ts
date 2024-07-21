import { useEffect, useState } from 'react';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';
import {
	collection,
	getDocs,
	// onSnapshot,
	orderBy,
	query,
	where,
} from 'firebase/firestore';

import { DbCollection } from '@/constants/textConstant';
import { db } from '@/firebase';
import { User } from '@/store/userSlice';

// export const useFetchTweets = (id: string | null) => {
// 	const [tweets, setTweets] = useState<TweetResponse[]>([]);
//
// 	useEffect(() => {
// 		const getTweets = () => {
// 			const tweetQuery = query(
// 				collection(db, DbCollection.tweets),
// 				where('userId', '==', id),
// 				orderBy('createdAt', 'desc')
// 			);
//
// 			return onSnapshot(tweetQuery, async (querySnapshot) => {
// 				const tweetPromises = querySnapshot.docs.map(async (doc) => {
// 					const userDataQuery = query(
// 						collection(db, DbCollection.users),
// 						where('id', '==', doc.data().userId)
// 					);
// 					const userDataSnapshot = await getDocs(userDataQuery);
// 					const userData = userDataSnapshot.docs[0]?.data() as User;
// 					const { name, nickname, avatarImage }: User = userData;
//
// 					return {
// 						...doc.data(),
// 						id: doc.id,
// 						authorName: name,
// 						authorNickname: nickname,
// 						avatarImage,
// 					} as TweetResponse;
// 				});
//
// 				try {
// 					const tweets = await Promise.all(tweetPromises);
// 					const sortedTweets = tweets.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
// 					setTweets(sortedTweets);
// 				} catch (error) {
// 					console.error('Error getting tweets:', error);
// 				}
// 			});
// 		};
//
// 		const unsubscribe = getTweets();
//
// 		return () => {
// 			unsubscribe();
// 		};
// 	}, [id]);
//
// 	return {
// 		tweets,
// 	};
// };
export const useFetchTweets = (id: string | null) => {
	const [tweets, setTweets] = useState<TweetResponse[]>([]);

	useEffect(() => {
		const getTweets = async () => {
			try {
				const tweetQuery = query(
					collection(db, DbCollection.tweets),
					where('userId', '==', id),
					orderBy('createdAt', 'desc')
				);
				const tweetSnapshot = await getDocs(tweetQuery);

				const tweetPromises = tweetSnapshot.docs.map(async (doc) => {
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

				const tweets = await Promise.all(tweetPromises);
				const sortedTweets = tweets.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
				setTweets(sortedTweets);
			} catch (error) {
				console.error('Error getting tweets:', error);
			}
		};

		getTweets().catch((error) => {
			console.log(error);
		});

		return () => {};
	}, [id]);

	return {
		tweets,
	};
};
