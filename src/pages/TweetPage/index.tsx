import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TweetComponent } from '@components/Content/Tweet';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';
import { PageNav } from '@components/PageNav';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/firebase';
import { User } from '@/store/userSlice';
import { HeightSizes } from '@/style/sizes';

export const TweetPage: FC = () => {
	const [tweet, setTweet] = useState<TweetResponse | null>(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchTweet = async () => {
			const tweetDocRef = doc(collection(db, 'tweets'), id);
			const tweetDocSnapshot = await getDoc(tweetDocRef);

			if (tweetDocSnapshot.exists()) {
				const tweetData = tweetDocSnapshot.data();
				const { userId } = tweetData;
				const userDataQuery = query(collection(db, 'users'), where('id', '==', userId));
				const userDataSnapshot = await getDocs(userDataQuery);
				const userData = userDataSnapshot.docs[0]?.data() as User;
				const { nickname, name, avatarImage }: User = userData;

				const tweet = {
					...tweetData,
					id: tweetDocSnapshot.id,
					authorName: name,
					authorNickname: nickname,
					avatarImage,
				} as TweetResponse;

				setTweet(tweet);
			}
		};

		fetchTweet().catch((error) => {
			console.error('Error getting tweet:', error);
		});
	}, [id]);

	return (
		<>
			<PageNav />

			{id && tweet && (
				<TweetComponent key={tweet.id} tweet={tweet} imageHeight={HeightSizes.h450} />
			)}
		</>
	);
};
