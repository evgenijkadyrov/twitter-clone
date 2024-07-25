import { useCallback, useEffect, useState } from 'react';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';

import { SearchPath } from '@/constants/textConstant';
import useDebounce from '@/hooks/useDebounce';
import { useSearchTweets } from '@/hooks/useSearchTweets';
import { useUsers } from '@/hooks/useUsers';
import { User, UserWithFollow } from '@/store/userSlice';

interface SearchDataHook {
	searchValue: string;
	setUsersByRecommendation: (user: UserWithFollow[]) => void;
	searchPath: string;
}
export const useSearchData = ({
	searchValue,
	setUsersByRecommendation,
	searchPath,
}: SearchDataHook): User[] | TweetResponse[] => {
	const [data, setData] = useState<User[] | TweetResponse[]>([]);
	const { debouncedValue } = useDebounce(searchValue, 300);
	const { getRecommendationUsers, getSearchUsers } = useUsers({
		setUsersByRecommendation,
		debouncedValue,
		setData,
	});
	const getTweets = useSearchTweets({ debouncedValue, setData });
	const search = useCallback(() => {
		switch (searchPath) {
			case SearchPath.users.toString():
				getSearchUsers().catch((error) => {
					console.error('Error getting users:', error);
				});
				break;
			case SearchPath.tweets.toString():
				getTweets().catch((error) => {
					console.error('Error getting tweets:', error);
				});
				break;
			default:
				break;
		}
	}, [searchPath, debouncedValue]);
	useEffect(() => {
		getRecommendationUsers();
	}, []);
	useEffect(() => {
		search();
	}, [debouncedValue]);
	return data;
};
