import { memo } from 'react';
import { useSelector } from 'react-redux';
import { TextAreaTweet } from '@components/Content/TextAreaForTweet';
import { Button } from '@components/ui/Button';
import { TypeButton } from '@components/ui/Button/button.interface';

import uploadIcon from '@/assets/icons/upload-image.svg';
import { AVAILABLE_PICTURE_FORMAT } from '@/constants/textConstant';
import { useCreateTweet } from '@/hooks/useCreateTweet';
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

export const CreatingTweetBlock = memo(({ tweetText, setTweet }: CreatingTweetBlockProps) => {
	const { avatarImage } = useSelector(userSelector);

	const { handleCreateTweet, inputFileChangeHandler } = useCreateTweet({ tweetText, setTweet });

	return (
		<>
			<Wrapper>
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
				</Label>
				<Button width="100%" color="primary" onClick={handleCreateTweet} type={TypeButton.submit}>
					Sent
				</Button>
			</Wrapper>
			<Divider />
		</>
	);
});
