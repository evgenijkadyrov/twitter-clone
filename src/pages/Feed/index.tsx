import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TweetComponent } from '@components/Content/Tweet';
import { PageNav } from '@components/PageNav';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

import { CreatingTweetBlock, TweetResponse } from '@/components';
import { db } from '@/firebase';
import { userSelector } from '@/store/selectors';
import { User } from '@/store/userSlice';
import { HeightSizes } from '@/style/sizes';

export const Feed = () => {
	const [tweet, setTweet] = useState('');
	const { id } = useSelector(userSelector);
	const [tweetsServer, setTweets] = useState<TweetResponse[]>([]);
	const [update, setUpdateLikes] = useState(false);

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
	}, [id, update]);

	return (
		<div>
			<PageNav />
			<CreatingTweetBlock tweetText={tweet} setTweet={setTweet} />
			{tweetsServer.map((tweet) => (
				<TweetComponent
					key={tweet.id}
					tweet={tweet}
					avatarImage={tweet.avatarImage}
					imageHeight={HeightSizes.h450}
					setUpdateLikes={setUpdateLikes}
				/>
			))}
		</div>
	);
};
