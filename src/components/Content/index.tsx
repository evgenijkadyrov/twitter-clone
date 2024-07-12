import { FC } from 'react';
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
	return (
		<Content>
			<TopBlock />
			<UserCommonInfo />
			<SubscriptionBlock />
			<CreatingTweetBlock avatarImage={avatarImage} />
			<TweetsBlock avatarImage={avatarImage} />
		</Content>
	);
};
