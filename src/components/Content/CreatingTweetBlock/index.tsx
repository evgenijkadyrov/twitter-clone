import { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { TextAreaTweet } from '@components/Content/TextAreaForTweet';
import { Button } from '@components/ui/Button';
import { TypeButton } from '@components/ui/Button/button.interface';

import uploadIcon from '@/assets/icons/upload-image.svg';
import { AVAILABLE_PICTURE_FORMAT } from '@/constants/textConstant';
import { useCreateTweet } from '@/hooks/useCreateTweet';
import { useShowNotificationUploadImage } from '@/hooks/useShowNorificationImageload';
import { uploadImage } from '@/services/tweetService';
import { userSelector } from '@/store/selectors';

import { CreatingTweetBlockProps } from './creatingTweetBlock.interface';
import {
	Avatar,
	Divider,
	FileInput,
	Label,
	UploadIcon,
	Wrapper,
} from './creatingTweetBlock.styled';

export const CreatingTweetBlock = ({
	tweetText,
	setTweet,
	closeModal,
}: CreatingTweetBlockProps) => {
	const [progress, setProgress] = useState<number | null>(null);
	const { avatarImage } = useSelector(userSelector);
	const [imageName, setImageName] = useState<string>('');

	const { handleCreateTweet } = useCreateTweet({
		setImageName,
		setTweet,
		closeModal,
		tweetText,
		imageName,
		setProgress,
		progressCallback: setProgress,
	});
	const inputFileChangeHandler = (e: SyntheticEvent) => {
		const target = e.target as HTMLInputElement;
		try {
			if (target.files) {
				const imageNameRes = uploadImage(target.files[0], setProgress);
				setImageName(imageNameRes as string);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const { renderProgressNotification } = useShowNotificationUploadImage(progress);
	const handleClear = () => {
		setProgress(null);
		setImageName('');
		setTweet('');
	};
	return (
		<>
			<Wrapper data-testid="creating-block">
				<Avatar background_url={avatarImage as string} />
				<TextAreaTweet tweet={tweetText} setTweet={setTweet} />
				<Label htmlFor="upload-photo-modal">
					<UploadIcon src={uploadIcon} alt="upload" />
					<FileInput
						type="file"
						id="upload-photo-modal"
						accept={AVAILABLE_PICTURE_FORMAT}
						onChange={inputFileChangeHandler}
					/>
					<div>{renderProgressNotification()}</div>
				</Label>

				<Button width="100%" color="primary" onClick={handleCreateTweet} type={TypeButton.submit}>
					Sent
				</Button>
				{progress && (
					<Button width="20%" color="primary" onClick={handleClear} type={TypeButton.submit}>
						Cancel
					</Button>
				)}
			</Wrapper>
			<Divider />
		</>
	);
};
