export interface CreatingTweetBlockProps {
	tweetText: string;
	setTweet: (value: string) => void;
	closeModal?: () => void;
	progressCallback?: (progress: number | null) => void;
}
