import { Tweet } from '@/constants/mocTweets';
import { User } from '@/store/userSlice';

export interface SearchListProps {
	searchValue: string;
	clearSearch: () => void;
}

export interface UserState {
	id: string;
	data: User;
}

export interface TweetState {
	id: string;
	data: Tweet;
}
