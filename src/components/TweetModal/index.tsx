import { SyntheticEvent, useState } from 'react';
import { createPortal } from 'react-dom';

import { CreatingTweetBlock } from '@/components';

import { ButtonClose, Container, FormTitle, Modal } from './tweet.styled';

interface TweetModalProps {
	closeModal: () => void;
}

export const TweetModal = ({ closeModal }: TweetModalProps) => {
	const [tweet, setTweet] = useState<string>('');
	const closeOutside = (e: SyntheticEvent): void => {
		if (e.currentTarget === e.target) {
			closeModal();
		}
	};

	return createPortal(
		<Container onClick={closeOutside}>
			<Modal>
				<FormTitle>Create tweet</FormTitle>
				<CreatingTweetBlock tweetText={tweet} setTweet={setTweet} />
				<ButtonClose onClick={closeModal}>X</ButtonClose>
			</Modal>
		</Container>,
		document.body
	);
};
