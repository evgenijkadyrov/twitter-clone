import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import person from '@/assets/images/avatar.png';
import { Paths } from '@/constants/routerPaths';

import { SearchItemProps } from './searchItem.interfaces';
import { Avatar, Content, ListItem } from './searchItem.styled';

export const SearchItem: FC<SearchItemProps> = ({ data, id, clearSearch }) => {
	const navigate = useNavigate();

	const tweetClickHandler = (): void => {
		navigate(`${Paths.TWEET}/${id}`);
		clearSearch();
	};

	const profileClickHandler = (): void => {
		navigate(`${Paths.PROFILE}/${id}`);
		clearSearch();
	};

	if ('createdAt' in data) {
		return <ListItem onClick={tweetClickHandler}>{data.tweetContent}</ListItem>;
	}

	return (
		<ListItem onClick={profileClickHandler}>
			<Avatar src={person} alt="person" loading="lazy" />
			<Content>
				<p>{data.name}</p>
				<p>{data.email}</p>
			</Content>
		</ListItem>
	);
};
