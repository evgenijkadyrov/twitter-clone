import { useState } from 'react';
import { ProfileEditModal } from '@components/ProfileEditModal';

import {
	CreatingTweetBlock,
	SubscriptionBlock,
	TopBlock,
	TweetsBlock,
	UserCommonInfo,
} from '@/components';

import { Content } from './content.styled';

export const ContentBlock = () => {
	const [tweet, setTweet] = useState('');
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const modalClickHandler = (): void => {
		setIsOpenModal((prev) => !prev);
	};
	return (
		<Content data-testid="content">
			<TopBlock />
			<UserCommonInfo openModal={modalClickHandler} />
			{isOpenModal && <ProfileEditModal closeModal={modalClickHandler} />}
			<SubscriptionBlock />
			<CreatingTweetBlock tweetText={tweet} setTweet={setTweet} />
			<TweetsBlock />
		</Content>
	);
};
