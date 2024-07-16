import { TweetResponse } from '@/components';
import { Tweet } from '@/constants/mocTweets';
import { User } from '@/store/userSlice';

export interface SearchListProps {
	tweetItems: TweetResponse[];
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
