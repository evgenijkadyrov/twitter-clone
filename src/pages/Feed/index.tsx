import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TweetComponent } from '@components/Content/Tweet';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';
import { PageNav } from '@components/PageNav';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

import { CreatingTweetBlock } from '@/components';
import { db } from '@/firebase';
import { userSelector } from '@/store/selectors';
import { User } from '@/store/userSlice';
import { HeightSizes } from '@/style/sizes';

export const Feed = () => {
	const [tweet, setTweet] = useState('');
	const { id } = useSelector(userSelector);
	const [tweetsServer, setTweets] = useState<TweetResponse[]>([]);

	useEffect(() => {
		const getTweets = async () => {
			const tweetQuery = query(collection(db, 'tweets'), orderBy('createdAt', 'desc'));
			const tweetSnapshot = await getDocs(tweetQuery);
			const tweetPromises: Promise<TweetResponse>[] = tweetSnapshot.docs.map(async (doc) => {
				const userDataQuery = query(collection(db, 'users'), where('id', '==', doc.data().userId));
				const userDataSnapshot = await getDocs(userDataQuery);
				const userData = userDataSnapshot.docs[0]?.data() as User;
				const { name, nickname, avatarImage }: User = userData;
				return {
					...doc.data(),
					id: doc.id,
					authorName: name,
					authorNickname: nickname || '',
					avatarImage: avatarImage || '',
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
		<>
			<PageNav />
			<CreatingTweetBlock tweetText={tweet} setTweet={setTweet} />
			{tweetsServer.map((tweet) => (
				<TweetComponent key={tweet.id} tweet={tweet} imageHeight={HeightSizes.h450} />
			))}
		</>
	);
};
