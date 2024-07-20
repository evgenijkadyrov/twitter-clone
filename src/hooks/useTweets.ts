import { collection, endAt, getDocs, orderBy, query, startAt, where } from 'firebase/firestore';

import { TweetResponse } from '@/components';
import { db } from '@/firebase';
import { User } from '@/store/userSlice';

interface UseTweets {
	debouncedValue: string;
	setTweetItems: (tweets: TweetResponse[]) => void;
}
export const useTweets =
	({ debouncedValue, setTweetItems }: UseTweets) =>
	async () => {
		try {
			const tweetQuery = query(
				collection(db, 'tweets'),
				orderBy('tweetContent', 'asc'),
				startAt(debouncedValue),
				endAt(`${debouncedValue}\uf8ff`)
			);
			const tweetSnapshot = await getDocs(tweetQuery);
			const tweetPromises = tweetSnapshot.docs.map(async (doc) => {
				const userDataQuery = query(collection(db, 'users'), where('id', '==', doc.data().userId));
				const userDataSnapshot = await getDocs(userDataQuery);
				const userData = userDataSnapshot.docs[0]?.data() as User;

				const { nickname, name }: User = userData || {};
				return {
					...doc.data(),
					id: doc.id,
					authorName: name,
					authorNickname: nickname,
				} as TweetResponse;
			});
			const tweets = await Promise.all(tweetPromises);
			setTweetItems(tweets);
		} catch (error) {
			console.error('Error getting tweets:', error);
		}
	};
