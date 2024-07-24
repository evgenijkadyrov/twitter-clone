import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';
import { Timestamp } from 'firebase/firestore';

export interface TweetComponentProps {
	tweet: TweetResponse;
	handleClickTweet?: () => void;
	imageHeight: string;
	showTweetImage?: boolean;
}

export interface Tweet {
	userId: string;
	authorName: string;
	authorNickname: string | null;
	createdAt: Timestamp;
	tweetContent: string;
	tweetImage: string | null;
	likedList: string[];
	avatarImage: string;
}
