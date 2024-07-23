import { useSelector } from 'react-redux';
import { arrayRemove, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';

import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { DbCollection } from '@/constants/textConstant';
import { db } from '@/firebase';
import { calculateIfIsLiked } from '@/helpers/calculateIfIsLiked';
import { userSelector } from '@/store/selectors';

import { useNotification } from './useNotification';

interface UseUpdateLike {
	likedList: string[];
	tweetId: string;
}
const useUpdateLike = ({ likedList, tweetId }: UseUpdateLike) => {
	const { showErrorNotification } = useNotification();
	const { id } = useSelector(userSelector);
	const isLiked = calculateIfIsLiked(likedList, id);
	const handleLikeClick = async () => {
		try {
			const tweetRef = doc(collection(db, DbCollection.tweets), tweetId);

			if (isLiked) {
				await updateDoc(tweetRef, {
					likedList: arrayRemove(id),
				});
			} else {
				await updateDoc(tweetRef, {
					likedList: arrayUnion(id as string),
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
