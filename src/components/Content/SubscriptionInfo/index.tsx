import { Divider } from '@components/Content/CreatingTweetBlock/creatingTweetBlock.styled';

import { CountValue, SubscriptionInfo, TextValue } from './subscription.styled';

interface SubscriptionItemProps {
	count: number;
	typeOfSubscription: string;
}

export const SubscriptionItem = ({ count, typeOfSubscription }: SubscriptionItemProps) => (
	<>
		<CountValue>{count}</CountValue>
		<TextValue>{typeOfSubscription}</TextValue>
	</>
);

export const SubscriptionBlock = () => (
	<>
		<SubscriptionInfo>
			<SubscriptionItem count={47} typeOfSubscription="Following" />
			<SubscriptionItem count={65} typeOfSubscription="Followers" />
		</SubscriptionInfo>
		<Divider />
	</>
);
