import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';

import { User } from '@/store/userSlice';

export interface SearchItemProps {
	data: User | TweetResponse;
	clearSearch: () => void;
}
