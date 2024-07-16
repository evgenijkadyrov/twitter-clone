import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TweetComponent } from '@components/Content/Tweet';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { Tweet } from '@/constants/mocTweets';
import { db } from '@/firebase';
import { userSelector } from '@/store/selectors';
import { User } from '@/store/userSlice';

import { Title, TweetWrapper } from './tweets.styled';

interface TweetBlockProps {
	avatarImage: string | null | undefined;
}

export interface TweetResponse extends Tweet {
	id: string;
}

export const TweetsBlock = ({ avatarImage }: TweetBlockProps) => {
	const { id } = useSelector(userSelector);
	const [tweetsServer, setTweets] = useState<TweetResponse[]>([]);
	useEffect(() => {
		const getTweets = async () => {
			const tweetQuery = query(collection(db, 'tweets'), where('userId', '==', id));
			const tweetSnapshot = await getDocs(tweetQuery);

			const tweetPromises: Promise<TweetResponse>[] = tweetSnapshot.docs.map(async (doc) => {
				const userDataQuery = query(collection(db, 'users'), where('id', '==', doc.data().userId));
				const userDataSnapshot = await getDocs(userDataQuery);
				const userData = userDataSnapshot.docs[0]?.data() as User;
				const { nickname, name }: User = userData;
				return {
					...doc.data(),
					id: doc.id,
					authorName: name,
					authorNickname: nickname,
				} as TweetResponse;
			});

			const tweets: Awaited<TweetResponse>[] = await Promise.all(tweetPromises);
			setTweets(tweets);
		};
		getTweets().catch((error) => {
			console.error('Error getting tweets:', error);
		});
	}, [id]);

	return (
		<TweetWrapper>
			<Title>Tweets</Title>
			{tweetsServer.map((tweet) => (
				<TweetComponent key={tweet.id} tweet={tweet} avatarImage={avatarImage} />
			))}
		</TweetWrapper>
	);
};
