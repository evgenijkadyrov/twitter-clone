import { ChangeEvent, useState } from 'react';
import { Button } from '@components/Button';

import { Avatar, Divider, StyledTextarea, Wrapper } from './creatingTweetBlock.styled';

interface CreatingTweetBlockProps {
	avatarImage: string | null | undefined;
}

const TextAreaTweet = () => {
	const [tweet, setTweet] = useState('');

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
export const CreatingTweetBlock = ({ avatarImage }: CreatingTweetBlockProps) => (
	<>
		<Wrapper>
			<Avatar background_url={avatarImage as string} />
			<TextAreaTweet />
			<Button width="100%" color="primary">
				Sent
			</Button>
		</Wrapper>
		<Divider />
	</>
);
