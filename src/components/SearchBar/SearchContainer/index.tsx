import { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RecommendedUsers } from '@components/Recomendedusers';
import { SearchAbstract } from '@components/SearchBar/SearchTweets';
import { LoadingSpinner } from '@components/ui/LoadingSpinner';
import { SearchInput } from '@components/ui/SearchInput';

import { useGetSearchPath } from '@/hooks/useGetSearchPath';
import { useSearchData } from '@/hooks/useSearchData';
import { loadingSelector } from '@/store/selectors';
import { UserWithFollow } from '@/store/userSlice';

import { Title } from './searchContainer.styled';

export const SearchContainer = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [usersByRecommendation, setUsersByRecommendation] = useState<UserWithFollow[]>([]);
	const isLoading = useSelector(loadingSelector);

	const searchPath = useGetSearchPath();
	const data = useSearchData({ searchValue, setUsersByRecommendation, searchPath });

	const onChangeHandler = (e: SyntheticEvent) => {
		const target = e.target as HTMLInputElement;
		setSearchValue(target.value);
	};

	const clearSearch = (): void => {
		setSearchValue('');
	};

	return (
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
	);
};
