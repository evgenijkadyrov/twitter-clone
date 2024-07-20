import { Divider } from '@components/Content/CreatingTweetBlock/creatingTweetBlock.styled';

import { FAKE_FOLLOWERS, FAKE_FOLLOWING, FOLLOWERS, FOLLOWING } from '@/constants/textConstant';

import { SubscriptionInfo } from './subscription.styled';
import { SubscriptionItem } from './SubscriptionItem';

export const SubscriptionBlock = () => (
	<>
		<SubscriptionInfo>
			<SubscriptionItem count={FAKE_FOLLOWING} typeOfSubscription={FOLLOWING} />
			<SubscriptionItem count={FAKE_FOLLOWERS} typeOfSubscription={FOLLOWERS} />
		</SubscriptionInfo>
		<Divider />
	</>
);
