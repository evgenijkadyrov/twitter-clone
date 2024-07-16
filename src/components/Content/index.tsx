import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

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
	return (
		<Content>
			<TopBlock />
			<UserCommonInfo />
			<SubscriptionBlock />
			<CreatingTweetBlock avatarImage={avatarImage} tweet={tweet} setTweet={setTweet} />
			<TweetsBlock avatarImage={avatarImage} />
		</Content>
	);
};
