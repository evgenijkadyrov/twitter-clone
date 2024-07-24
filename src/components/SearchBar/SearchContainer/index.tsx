import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';
import { RecommendedUsers } from '@components/Recomendedusers';
import { SearchAbstract } from '@components/SearchBar/SearchTweets';
import { LoadingSpinner } from '@components/ui/LoadingSpinner';
import { SearchInput } from '@components/ui/SearchInput';

import { Paths } from '@/constants/routerPaths';
import useDebounce from '@/hooks/useDebounce';
import { useSearchTweets } from '@/hooks/useSearchTweets';
import { useUsers } from '@/hooks/useUsers';
import { loadingSelector } from '@/store/selectors';
import { User, UserWithFollow } from '@/store/userSlice';

import { Title } from './searchContainer.styled';

export enum SearchPath {
	users = 'users',
	tweets = 'tweets',
}

export const SearchContainer = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [data, setData] = useState<User[] | TweetResponse[]>([]);
	const [usersByRecommendation, setUsersByRecommendation] = useState<UserWithFollow[]>([]);
	const location = useLocation();
	const isLoading = useSelector(loadingSelector);
	const searchPath =
		location.pathname === Paths.FEED.toString() ? SearchPath.users : SearchPath.tweets;

	const { debouncedValue } = useDebounce(searchValue, 300);
	const { getRecommendationUsers, getSearchUsers } = useUsers({
		setUsersByRecommendation,
		debouncedValue,
		setData,
	});
	const getTweets = useSearchTweets({ debouncedValue, setData });

	const onChangeHandler = (e: SyntheticEvent) => {
		const target = e.target as HTMLInputElement;
		setSearchValue(target.value);
	};

	const clearSearch = (): void => {
		setSearchValue('');
	};

	const search = useCallback(() => {
		if (searchPath === SearchPath.users) {
			console.log('1');
			getSearchUsers().catch((error) => {
				console.error('Error getting users:', error);
			});
		}
		if (searchPath === SearchPath.tweets) {
			getTweets().catch((error) => {
				console.error('Error getting tweets:', error);
			});
		}
	}, [searchPath, debouncedValue]);
	useEffect(() => {
		getRecommendationUsers();
	}, []);
	useEffect(() => {
		search();
	}, [debouncedValue]);
	return (
		// <SearchBarWrapper>
		<>
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
			{isLoading && !data && <LoadingSpinner />}

			<RecommendedUsers
				usersByRecommendation={usersByRecommendation}
				setUsersByRecommendation={setUsersByRecommendation}
			/>
		</>
		// </SearchBarWrapper>
	);
};
