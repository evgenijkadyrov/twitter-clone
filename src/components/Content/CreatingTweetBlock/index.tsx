import { useSelector } from 'react-redux';
import { Button } from '@components/Button';
import { TextAreaTweet } from '@components/Content/TextAreaForTweet';

import { ErrorsResponseCode } from '@/constants/errorsResponseCode';
import { NotificationMessages } from '@/constants/notificationMessages';
import { handleFirebaseError } from '@/helpers/firebaseErrors';
import { TweetService } from '@/services/tweetService';
import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';
import { userSelector } from '@/store/selectors';

import { Avatar, Divider, Wrapper } from './creatingTweetBlock.styled';

interface CreatingTweetBlockProps {
	avatarImage: string | null | undefined;
	tweet: string;
	setTweet: (value: string) => void;
}
export const CreatingTweetBlock = ({ avatarImage, tweet, setTweet }: CreatingTweetBlockProps) => {
	const dispatch = useAppDispatch();
	const { id } = useSelector(userSelector);
	const handleCreateTweet = async (): Promise<void> => {
		try {
			await TweetService.sendTweet(tweet, id, null);
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
	return (
		<>
			<Wrapper>
				<Avatar background_url={avatarImage as string} />
				<TextAreaTweet tweet={tweet} setTweet={setTweet} />
				<Button width="100%" color="primary" onClick={handleCreateTweet}>
					Sent
				</Button>
			</Wrapper>
			<Divider />
		</>
	);
};
