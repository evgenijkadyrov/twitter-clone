import { TweetResponse } from '@/components';
import { User } from '@/store/userSlice';

export interface SearchItemProps {
	data: User | TweetResponse;
	clearSearch: () => void;
}
