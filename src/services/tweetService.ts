import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

import { db } from '@/firebase';

const uploadImage = async (uploadedImage: File | null): Promise<string | null> => {
	if (!uploadedImage) {
		return null;
	}
	const storage = getStorage();
	const imageName = `images/${uploadedImage.name}`;

	const imageRef = ref(storage, imageName);
	await uploadBytes(imageRef, uploadedImage);

	return imageName;
};

const sendTweet = async (tweetContent: string, userId: string | null, tweetImage: File | null) => {
	const tweetsCollectionRef = collection(db, 'tweets');
	const imageName = await uploadImage(tweetImage);
	await addDoc(tweetsCollectionRef, {
		userId,
		tweetContent,
		createdAt: serverTimestamp(),
		tweetImage: imageName,
		likedList: [],
	});
};

// const updateTweets = async (name: string, email: string) => {
//     const q = query(collection(db, 'tweets'), where("email", "==", email));
//     const querySnapshot = await getDocs(q);
//
//     querySnapshot.forEach(async (doc) => {
//         await updateDoc(doc.ref, {
//             name,
//             email,
//         });
//     });
// };

export const TweetService = {
	sendTweet,
	// updateTweets,
};
