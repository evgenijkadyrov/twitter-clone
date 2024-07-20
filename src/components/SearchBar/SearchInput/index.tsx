import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RecommendedUsers } from '@components/Recomendedusers';
import { SearchList } from '@components/SearchBar/SearchList';

import searchIcon from '@/assets/icons/search.svg';
import defaultAvatar from '@/assets/images/avatar.png';
import { TweetResponse } from '@/components';
import useDebounce from '@/hooks/useDebounce';
import { useTweets } from '@/hooks/useTweets';
import { useUsers } from '@/hooks/useUsers';
import { User, UserWithFollow } from '@/store/userSlice';

import {
	Aside,
	Avatar,
	Container,
	Icon,
	ProfileInfo,
	Row,
	SearchBarContainer,
	SubTitle,
	Title,
	TitleProfile,
} from './searchInput.styled';

export enum SearchFields {
	users = 'name',
	tweets = 'tweetContent',
}

export const SearchInput = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [tweetItems, setTweetItems] = useState<TweetResponse[]>([]);
	const [usersBySearch, setUsersBySearch] = useState<User[]>([]);
	const [usersByRecommendation, setUsersByRecommendation] = useState<UserWithFollow[]>([]);
	const location = useLocation();
	const searchPath = location.pathname === '/feed' ? 'users' : 'tweets';

	const debouncedSearchValue = useDebounce(searchValue, 300);

	const { getRecommendationUsers, getSearchUsers } = useUsers({
		setUsersByRecommendation,
		debouncedSearchValue,
		setUsersBySearch,
	});
	const getTweets = useTweets({ debouncedSearchValue, setTweetItems });

	const onChangeHandler = (e: SyntheticEvent) => {
		const target = e.target as HTMLInputElement;
		setSearchValue(target.value);
	};

	const clearSearch = (): void => {
		setSearchValue('');
	};

	useEffect(() => {
		getRecommendationUsers();
	}, [getRecommendationUsers]);

	const search = useCallback(() => {
		if (searchPath === 'users') {
			getSearchUsers().catch((error) => {
				console.error('Error getting users:', error);
			});
		} else {
			setTweetItems([]);
			getTweets().catch((error) => {
				console.error('Error getting tweets:', error);
			});
		}
	}, [searchPath, getSearchUsers, getTweets]);

	useEffect(() => {
		search();
	}, [debouncedSearchValue]);

	return (
		<Aside>
			<Container>
				<Icon src={searchIcon} alt="search" />
				<SearchBarContainer
					placeholder={searchPath === 'users' ? 'Search Users' : 'Search tweets'}
					value={searchValue}
					onChange={onChangeHandler}
				/>
			</Container>
			{searchValue && (
				<>
					<Title>Search Results</Title>
					{searchPath === 'tweets' ? (
						<SearchList tweetItems={tweetItems} clearSearch={clearSearch} />
					) : (
						usersBySearch.map(({ name, nickname, id, avatarImage }) => (
							<Row key={id}>
								<Avatar background_url={avatarImage || defaultAvatar} />

								<ProfileInfo>
									<TitleProfile>{name}</TitleProfile>
									<SubTitle>{nickname}</SubTitle>
								</ProfileInfo>
							</Row>
						))
					)}
				</>
			)}
			{!searchValue && (
				<RecommendedUsers
					usersByRecommendation={usersByRecommendation}
					setUsersByRecommendation={setUsersByRecommendation}
				/>
			)}
		</Aside>
	);
};
