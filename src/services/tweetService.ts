import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';

import { db } from '@/firebase';

export const uploadImage = (
	uploadedImage: File | null,
	progressCallback?: (progress: number) => void
): string | null => {
	if (!uploadedImage) {
		return null;
	}

	const storage = getStorage();
	const imageName = `images/${uploadedImage.name}`;

	const imageRef = ref(storage, imageName);
	const uploadTask = uploadBytesResumable(imageRef, uploadedImage);
	uploadTask.on(
		'state_changed',
		(snapshot) => {
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			if (progressCallback) {
				progressCallback(progress);
			}
		},
		(error) => {
			console.log(error);
		}
	);

	return imageName;
};

const sendTweet = async (tweetContent: string, userId: string | null, imageName: string) => {
	const tweetsCollectionRef = collection(db, 'tweets');
	await addDoc(tweetsCollectionRef, {
		userId,
		tweetContent,
		createdAt: serverTimestamp(),
		tweetImage: imageName,
		likedList: [],
	});
};

export const TweetService = {
	sendTweet,
};
