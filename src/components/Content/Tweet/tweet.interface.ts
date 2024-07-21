import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';

export interface TweetComponentProps {
	tweet: TweetResponse;
	handleClickTweet?: () => void;
	imageHeight: string;
	showTweetImage?: boolean;
}
