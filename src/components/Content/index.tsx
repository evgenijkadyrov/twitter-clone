import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProfileEditModal } from '@components/ProfileEditModal';

import {
	CreatingTweetBlock,
	SubscriptionBlock,
	TopBlock,
	TweetsBlock,
	UserCommonInfo,
} from '@/components';
import { userSelector } from '@/store/selectors';

import { Content } from './content.styled';

export const ContentBlock: FC = () => {
	const { avatarImage } = useSelector(userSelector);
	const [tweet, setTweet] = useState('');
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [update, setUpdate] = useState(false);
	const modalClickHandler = (): void => {
		setIsOpenModal((prev) => !prev);
	};
	return (
		<Content>
			<TopBlock />
			<UserCommonInfo openModal={modalClickHandler} />
			{isOpenModal && <ProfileEditModal closeModal={modalClickHandler} setUpdate={setUpdate} />}
			<SubscriptionBlock />
			<CreatingTweetBlock
				avatarImage={avatarImage}
				tweetText={tweet}
				setTweet={setTweet}
				setUpdate={setUpdate}
			/>
			<TweetsBlock avatarImage={avatarImage} update={update} setUpdate={setUpdate} />
		</Content>
	);
};
