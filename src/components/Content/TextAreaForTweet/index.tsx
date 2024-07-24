import { ChangeEvent, memo } from 'react';

import { TextAreaTweetProps } from './textArea.interface';
import { StyledTextarea } from './textArea.styled';

export const TextAreaTweet = memo(({ tweet, setTweet }: TextAreaTweetProps) => {
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTweet(event.target.value);
	};

	return (
		<StyledTextarea
			data-testid="textarea-create-tweet"
			placeholder="What's happening..."
			value={tweet}
			onChange={handleChange}
			rows={5}
		/>
	);
});
