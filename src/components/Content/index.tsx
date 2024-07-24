import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileBackground from '@assets/images/home-background.jpg';
import { ImageBackground } from '@components/Content/TopBlock/topBlock.styled';
import { Avatar } from '@components/Content/UserCommonInfo/userInfo.styled';
import { PageNav } from '@components/PageNav';
import { ProfileEditModal } from '@components/ProfileEditModal';

import {
	CreatingTweetBlock,
	SubscriptionBlock,
	TopBlock,
	TweetsBlock,
	UserCommonInfo,
} from '@/components';
import { useFetchTweetsByUser } from '@/hooks/useFetchTweetsByUser';
import { userSelector } from '@/store/selectors';

import { Content } from './content.styled';

export const ContentBlock = () => {
	const [tweet, setTweet] = useState('');
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const { id: myId } = useSelector(userSelector);
	const { id } = useParams();
	const modalClickHandler = (): void => {
		setIsOpenModal((prev) => !prev);
	};

	const { tweets } = useFetchTweetsByUser(id as string);
	console.log('tweets', tweets);

	return (
		<Content data-testid="content">
			{id !== myId && (
				<>
					<PageNav />
					<ImageBackground background_url={ProfileBackground} />
					<Avatar background_url={'avatarImage' as string} />
					<TweetsBlock tweets={tweets} />
				</>
			)}
			{id === myId && (
				<>
					<TopBlock />
					<UserCommonInfo openModal={modalClickHandler} />
					<SubscriptionBlock />
					<CreatingTweetBlock tweetText={tweet} setTweet={setTweet} />
					<TweetsBlock tweets={tweets} />
					{isOpenModal && <ProfileEditModal closeModal={modalClickHandler} />}
				</>
			)}
		</Content>
	);
};
