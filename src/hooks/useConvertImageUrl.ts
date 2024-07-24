import { useEffect } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';

import { storage } from '@/firebase';

const useTweetImageURL = (tweetImage: string | null, setImageUrl: (url: string) => void) => {
	useEffect(() => {
		const fetchTweetImageURL = async () => {
			if (tweetImage) {
				try {
					const url = await getDownloadURL(ref(storage, tweetImage));
					setImageUrl(url);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fetchTweetImageURL().catch((error) => {
			console.log(error);
		});
	}, [tweetImage, setImageUrl]);
};
export default useTweetImageURL;
