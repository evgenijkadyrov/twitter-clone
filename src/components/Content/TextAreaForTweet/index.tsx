import { ChangeEvent } from 'react';

import { StyledTextarea } from './textArea.styled';

interface TextAreaTweetProps {
	tweet: string;
	setTweet: (value: string) => void;
}

export const TextAreaTweet = ({ tweet, setTweet }: TextAreaTweetProps) => {
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTweet(event.target.value);
	};

	return (
		<div>
			<StyledTextarea
				placeholder="What's happening..."
				value={tweet}
				onChange={handleChange}
				rows={5}
			/>
		</div>
	);
};
