import { ChangeEvent, memo } from 'react';

import { TextAreaTweetProps } from './textArea.interface';
import { StyledTextarea } from './textArea.styled';

export const TextAreaTweet = memo(({ tweet, setTweet }: TextAreaTweetProps) => {
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
});
