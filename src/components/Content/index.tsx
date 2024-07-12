import { FC } from 'react';
import { useSelector } from 'react-redux';
import { CreatingTweetBlock } from '@components/Content/CreatingTweetBlock';
import { SubscriptionBlock } from '@components/Content/SubscriptionInfo';
import { TopBlock } from '@components/Content/TopBlock';
import { TweetsBlock } from '@components/Content/TweetsBlock';
import { UserCommonInfo } from '@components/Content/UserCommonInfo';

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
