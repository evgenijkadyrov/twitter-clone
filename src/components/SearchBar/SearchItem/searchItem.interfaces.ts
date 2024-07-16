import { Tweet } from '@/constants/mocTweets';
import { User } from '@/store/userSlice';

export interface SearchItemProps {
	id: string;
	data: User | Tweet;
	clearSearch: () => void;
}
