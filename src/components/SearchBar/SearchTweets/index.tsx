import { memo } from 'react';
import { useSelector } from 'react-redux';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';
import { SearchPath } from '@components/SearchBar/SearchContainer';
import { SearchItem } from '@components/SearchBar/SearchItem';
import { LoadingSpinner } from '@components/ui/LoadingSpinner';
import { UserNameBlock } from '@components/ui/userNameBlock';

import { loadingSelector } from '@/store/selectors';
import { User } from '@/store/userSlice';

interface SearchAbstractProps {
	searchPath: string;
	data: TweetResponse[] | User[];
	clearSearch: () => void;
}
export const SearchAbstract = memo(({ searchPath, data, clearSearch }: SearchAbstractProps) => {
	const isLoading = useSelector(loadingSelector);
	return (
		<div>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div>
					{searchPath === SearchPath.tweets.toString() ? (
						<>
							{(data as TweetResponse[]).map((tweet) => (
								<SearchItem key={tweet.id} data={tweet} clearSearch={clearSearch} />
							))}
						</>
					) : (
						<>
							{(data as User[]).map((user) => (
								<UserNameBlock
									key={user.id}
									name={user.name}
									avatarImage={user.avatarImage}
									id={user.id}
									clearSearch={clearSearch}
									nickname={user.nickname}
								/>
							))}
						</>
					)}
				</div>
			)}
		</div>
	);
});
