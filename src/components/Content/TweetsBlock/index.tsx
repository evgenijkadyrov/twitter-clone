import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TweetComponent } from '@components/Content/Tweet';
import { collection, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';

import { Tweet } from '@/constants/mocTweets';
import { db } from '@/firebase';
import { userSelector } from '@/store/selectors';
import { User } from '@/store/userSlice';
import { HeightSizes } from '@/style/sizes';

import { Title, TweetWrapper } from './tweets.styled';

export interface TweetResponse extends Tweet {
	id: string;
}

export const TweetsBlock = () => {
	const { id } = useSelector(userSelector);
	const [tweetsServer, setTweets] = useState<TweetResponse[]>([]);

	useEffect(() => {
		const getTweets = () => {
			const tweetQuery = query(
				collection(db, 'tweets'),
				where('userId', '==', id),
				orderBy('createdAt', 'desc')
			);

			return onSnapshot(tweetQuery, async (querySnapshot) => {
				const tweetPromises = querySnapshot.docs.map(async (doc) => {
					const userDataQuery = query(
						collection(db, 'users'),
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
					const sortedTweets = tweets.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
					setTweets(sortedTweets);
				} catch (error) {
					console.error('Error getting tweets:', error);
				}
			});
		};

		const unsubscribe = getTweets();

		return () => {
			unsubscribe();
		};
	}, [id]);

	return (
		<TweetWrapper>
			<Title>Tweets</Title>
			{tweetsServer.map((tweet) => (
				<TweetComponent key={tweet.id} tweet={tweet} imageHeight={HeightSizes.h450} />
			))}
		</TweetWrapper>
	);
};
