import { TweetResponse } from '@/components';

export interface TweetComponentProps {
	tweet: TweetResponse;
	handleClickTweet?: () => void;
	imageHeight: string;
	showTweetImage?: boolean;
}
