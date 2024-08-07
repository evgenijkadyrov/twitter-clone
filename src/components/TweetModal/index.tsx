import { memo, SyntheticEvent, useState } from 'react';
import { createPortal } from 'react-dom';

import { CreatingTweetBlock } from '@/components';

import { ButtonClose, Container, FormTitle, Modal } from './tweet.styled';

interface TweetModalProps {
	closeModal: () => void;
}

export const TweetModal = memo(({ closeModal }: TweetModalProps) => {
	const [tweet, setTweet] = useState<string>('');
	const closeOutside = (e: SyntheticEvent): void => {
		if (e.currentTarget === e.target) {
			closeModal();
		}
	};

	return createPortal(
		<Container onClick={closeOutside}>
			<Modal data-testid="modal-window">
				<FormTitle>Create tweet</FormTitle>
				<CreatingTweetBlock tweetText={tweet} setTweet={setTweet} closeModal={closeModal} />
				<ButtonClose onClick={closeModal}>X</ButtonClose>
			</Modal>
		</Container>,
		document.body
	);
});
