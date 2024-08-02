import { useSelector } from 'react-redux';

import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { useNotification } from '@/hooks/useNotification';
import { TweetService } from '@/services/tweetService';
import { userSelector } from '@/store/selectors';

interface CreateTweetHook {
	handleCreateTweet: () => Promise<void>;
	closeModal?: () => void;
}

interface UseCreateTweetProps {
	setProgress: (progress: null | number) => void;
	imageName: string;
	setImageName: (value: string) => void;
	tweetText: string;
	setTweet: (value: string) => void;
	closeModal?: () => void;
	progressCallback?: (progress: number | null) => void;
}

export const useCreateTweet = ({
	setTweet,
	tweetText,
	closeModal,
	progressCallback,
	setProgress,
	imageName,
	setImageName,
}: UseCreateTweetProps): CreateTweetHook => {
	const { id } = useSelector(userSelector);
	const { showSuccessNotification, showErrorNotification } = useNotification();

	const handleCreateTweet = async (): Promise<void> => {
		try {
			await TweetService.sendTweet(tweetText, id, imageName);
			showSuccessNotification(NotificationMessages.SUCCESS_TWEET_CREATED);
			setTweet('');
			setImageName('');
			setProgress(null);
			if (closeModal) {
				closeModal();
				if (progressCallback) {
					progressCallback(null);
				}
			}
		} catch (error: unknown) {
			showErrorNotification(
				error,
				ErrorsResponseCode.INVALID_CREDENTIALS,
				NotificationMessages.ERROR_TWEET_CREATED
			);
		}
	};

	return { handleCreateTweet };
};
