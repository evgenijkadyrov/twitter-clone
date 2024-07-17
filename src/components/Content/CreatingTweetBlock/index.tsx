import { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@components/Button';
import { TextAreaTweet } from '@components/Content/TextAreaForTweet';

import uploadIcon from '@/assets/icons/upload-image.svg';
import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { handleFirebaseError } from '@/helpers/firebaseErrors';
import { TweetService } from '@/services/tweetService';
import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';
import { userSelector } from '@/store/selectors';

import {
	Avatar,
	Divider,
	FileInput,
	Label,
	UploadIcon,
	Wrapper,
} from './creatingTweetBlock.styled';

interface CreatingTweetBlockProps {
	avatarImage: string | null | undefined;
	tweet: string;
	setTweet: (value: string) => void;
}
export const CreatingTweetBlock = ({ avatarImage, tweet, setTweet }: CreatingTweetBlockProps) => {
	const [uploadedImage, setUploadedImage] = useState<File | null>(null);
	const dispatch = useAppDispatch();
	const { id } = useSelector(userSelector);

	const handleCreateTweet = async (): Promise<void> => {
		try {
			await TweetService.sendTweet(tweet, id, uploadedImage);
			dispatch(
				notificationActions.showSuccess({
					success: NotificationMessages.SUCCESS_TWEET_CREATED,
				})
			);
			setTweet('');
		} catch (error: unknown) {
			dispatch(
				notificationActions.showError(
					handleFirebaseError(
						error,
						ErrorsResponseCode.INVALID_CREDENTIALS,
						NotificationMessages.ERROR_TWEET_CREATED
					)
				)
			);
		}
	};
	const inputFileChangeHandler = (e: SyntheticEvent): void => {
		const target = e.target as HTMLInputElement;
		if (target.files) {
			setUploadedImage(target.files[0]);
		}
	};
	return (
		<>
			<Wrapper>
				<Avatar background_url={avatarImage as string} />
				<TextAreaTweet tweet={tweet} setTweet={setTweet} />
				<Label htmlFor="upload-photo-modal">
					<UploadIcon src={uploadIcon} alt="upload" />
					<FileInput type="file" id="upload-photo-modal" onChange={inputFileChangeHandler} />
				</Label>
				<Button width="100%" color="primary" onClick={handleCreateTweet} type="submit">
					Sent
				</Button>
			</Wrapper>
			<Divider />
		</>
	);
};
