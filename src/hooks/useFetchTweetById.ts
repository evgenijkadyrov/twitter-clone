import { useEffect, useState } from 'react';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';

import { db } from '@/firebase';
import { User } from '@/store/userSlice';

export const useFetchTweetById = (id: string | null): TweetResponse | null => {
	const [tweet, setTweet] = useState<TweetResponse | null>(null);

	useEffect(() => {
		if (id) {
			const tweetDocRef = doc(collection(db, 'tweets'), id);

			const unsubscribe = onSnapshot(tweetDocRef, async (tweetDocSnapshot) => {
				if (tweetDocSnapshot.exists()) {
					const tweetData = tweetDocSnapshot.data();
					const { userId } = tweetData;

					const userDataQuery = query(collection(db, 'users'), where('id', '==', userId));
					const userDataSnapshot = await getDocs(userDataQuery);
					const userData = userDataSnapshot.docs[0]?.data() as User;
					const { nickname, name, avatarImage }: User = userData;

					const updatedTweet = {
						...tweetData,
						id: tweetDocSnapshot.id,
						authorName: name,
						authorNickname: nickname,
						avatarImage,
					} as TweetResponse;

					setTweet(updatedTweet);
				} else {
					setTweet(null);
				}
			});

			return () => unsubscribe();
		}
		return undefined;
	}, [id]);

	return tweet;
};
