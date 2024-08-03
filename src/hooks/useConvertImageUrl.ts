import { useEffect } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';

import { storage } from '@/firebase';
import { getErrorMessage } from '@/helpers/getErrorMessage';
import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';

const useTweetImageURL = (tweetImage: string | null, setImageUrl: (url: string) => void) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const fetchTweetImageURL = async () => {
			if (tweetImage) {
				try {
					const url = await getDownloadURL(ref(storage, tweetImage));
					setImageUrl(url);
				} catch (error) {
					dispatch(notificationActions.showError({ error: getErrorMessage(error) }));
				}
			}
		};

		fetchTweetImageURL().catch((error) => {
			dispatch(notificationActions.showError({ error: getErrorMessage(error) }));
		});
	}, [tweetImage, setImageUrl]);
};
export default useTweetImageURL;
