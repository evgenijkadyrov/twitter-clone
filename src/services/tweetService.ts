import { getAuth } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
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
	const imageName = `images/${uploadedImage.name + Date.now()}`;

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
const deleteTweet = async (tweetId: string) => {
	const tweetsCollectionRef = doc(db, 'tweets', tweetId);
	await deleteDoc(tweetsCollectionRef);
};
export const updateTweetInfo = async (
	tweetId: string,
	tweetContent: string,
	id: string
): Promise<void> => {
	const auth = getAuth();
	const user = auth.currentUser;
	if (!user || !id) {
		throw new Error('not authorized');
	}

	const userRef = doc(db, 'tweets', tweetId);

	await updateDoc(userRef, {
		tweetContent,
	});
};
export const TweetService = {
	sendTweet,
	deleteTweet,
	updateTweetInfo,
};
