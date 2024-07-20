import { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { CreatingTweetBlockProps } from '@components/Content/CreatingTweetBlock/creatingTweetBlock.interface';

import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { useNotification } from '@/hooks/useNotification';
import { TweetService } from '@/services/tweetService';
import { userSelector } from '@/store/selectors';

interface CreateTweetHook {
	handleCreateTweet: () => Promise<void>;
	inputFileChangeHandler: (e: SyntheticEvent) => void;
}

export const useCreateTweet = ({
	setTweet,
	tweetText,
}: CreatingTweetBlockProps): CreateTweetHook => {
	const { id } = useSelector(userSelector);
	const { showSuccessNotification, showErrorNotification } = useNotification();
	const [uploadedImage, setUploadedImage] = useState<File | null>(null);

	const handleCreateTweet = async (): Promise<void> => {
		try {
			await TweetService.sendTweet(tweetText, id, uploadedImage);
			showSuccessNotification(NotificationMessages.SUCCESS_TWEET_CREATED);
			setTweet('');
		} catch (error: unknown) {
			showErrorNotification(
				error,
				ErrorsResponseCode.INVALID_CREDENTIALS,
				NotificationMessages.ERROR_TWEET_CREATED
			);
		}
	};

	const inputFileChangeHandler = (e: SyntheticEvent): void => {
		const target = e.target as HTMLInputElement;
		if (target.files) {
			setUploadedImage(target.files[0]);
		}
	};

	return { handleCreateTweet, inputFileChangeHandler };
};
