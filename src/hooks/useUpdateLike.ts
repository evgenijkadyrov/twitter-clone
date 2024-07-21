import { arrayRemove, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';

import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { DbCollection } from '@/constants/textConstant';
import { db } from '@/firebase';
import { calculateIfIsLiked } from '@/helpers/calculateIfIsLiked';

import { useNotification } from './useNotification';

interface UseUpdateLike {
	likedList: string[];
	tweetId: string;
	userId: string;
}
const useUpdateLike = ({ likedList, tweetId, userId }: UseUpdateLike) => {
	const { showErrorNotification } = useNotification();
	const isLiked = calculateIfIsLiked(likedList, userId);

	const handleLikeClick = async () => {
		try {
			const tweetRef = doc(collection(db, DbCollection.tweets), tweetId);

			if (isLiked) {
				await updateDoc(tweetRef, {
					likedList: arrayRemove(userId),
				});
			} else {
				await updateDoc(tweetRef, {
					likedList: arrayUnion(userId),
				});
			}
		} catch (error) {
			showErrorNotification(
				error,
				ErrorsResponseCode.INVALID_CREDENTIALS,
				NotificationMessages.ERROR_UPDATE_LIKE
			);
		}
	};

	return handleLikeClick;
};

export default useUpdateLike;
