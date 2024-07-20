import { Divider } from '@components/Content/CreatingTweetBlock/creatingTweetBlock.styled';

import { CountValue, SubscriptionInfo, TextValue } from './subscription.styled';

export interface SubscriptionItemProps {
	count: number;
	typeOfSubscription: string;
}
export const SubscriptionItem = ({ count, typeOfSubscription }: SubscriptionItemProps) => (
	<>
		<CountValue>{count}</CountValue>
		<TextValue>{typeOfSubscription}</TextValue>
	</>
);
const FAKE_FOLLOWING = 47;
const FAKE_FOLLOWERS = 65;
export const SubscriptionBlock = () => (
	<>
		<SubscriptionInfo>
			<SubscriptionItem count={FAKE_FOLLOWING} typeOfSubscription="Following" />
			<SubscriptionItem count={FAKE_FOLLOWERS} typeOfSubscription="Followers" />
		</SubscriptionInfo>
		<Divider />
	</>
);
