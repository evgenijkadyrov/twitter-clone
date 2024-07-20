import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RecommendedUsers } from '@components/Recomendedusers';
import { SearchAbstract } from '@components/SearchBar/SearchTweets';
import { SearchInput } from '@components/ui/SearchInput';

import { TweetResponse } from '@/components';
import { Paths } from '@/constants/routerPaths';
import useDebounce from '@/hooks/useDebounce';
import { useTweets } from '@/hooks/useTweets';
import { useUsers } from '@/hooks/useUsers';
import { User, UserWithFollow } from '@/store/userSlice';

import { SearchBarWrapper, Title } from './searchContainer.styled';

export enum SearchPath {
	users = 'users',
	tweets = 'tweets',
}

export const SearchContainer = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [data, setData] = useState<User[] | TweetResponse[]>([]);
	const [usersByRecommendation, setUsersByRecommendation] = useState<UserWithFollow[]>([]);
	const location = useLocation();
	const searchPath =
		location.pathname === Paths.FEED.toString() ? SearchPath.users : SearchPath.tweets;

	const { debouncedValue } = useDebounce(searchValue, 300);

	const { getRecommendationUsers, getSearchUsers } = useUsers({
		setUsersByRecommendation,
		debouncedValue,
		setData,
	});
	const getTweets = useTweets({ debouncedValue, setData });

	const onChangeHandler = (e: SyntheticEvent) => {
		const target = e.target as HTMLInputElement;
		setSearchValue(target.value);
	};

	const clearSearch = (): void => {
		setSearchValue('');
	};

	const search = useCallback(() => {
		if (searchPath === SearchPath.users) {
			getSearchUsers().catch((error) => {
				console.error('Error getting users:', error);
			});
		}
		if (searchPath === SearchPath.tweets) {
			getTweets().catch((error) => {
				console.error('Error getting tweets:', error);
			});
		}
	}, [searchPath, getSearchUsers, getTweets]);
	useEffect(() => {
		getRecommendationUsers();
	}, []);
	useEffect(() => {
		search();
	}, [debouncedValue]);

	return (
		<SearchBarWrapper>
			<SearchInput
				searchValue={searchValue}
				searchPath={searchPath}
				onChangeHandler={onChangeHandler}
			/>
			{searchValue && (
				<>
					<Title>Search Results</Title>
					<SearchAbstract searchPath={searchPath} clearSearch={clearSearch} data={data} />
				</>
			)}
			{!searchValue && (
				<RecommendedUsers
					usersByRecommendation={usersByRecommendation}
					setUsersByRecommendation={setUsersByRecommendation}
				/>
			)}
		</SearchBarWrapper>
	);
};