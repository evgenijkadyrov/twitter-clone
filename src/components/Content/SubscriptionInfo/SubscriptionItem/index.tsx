import { memo } from 'react';
import { SubscriptionItemProps } from '@components/Content/SubscriptionInfo/subscription.interface';

import { CountValue, TextValue } from './subscriptionItem.styled';

export const SubscriptionItem = memo(({ count, typeOfSubscription }: SubscriptionItemProps) => (
	<>
		<CountValue>{count}</CountValue>
		<TextValue>{typeOfSubscription}</TextValue>
	</>
));
