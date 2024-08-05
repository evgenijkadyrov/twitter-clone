import { memo } from 'react';
import { useSelector } from 'react-redux';
import { TweetResponse } from '@components/Content/TweetsBlock/tweetsBlock.interface';
import { SearchItem } from '@components/SearchBar/SearchItem';
import { LoadingSpinner } from '@components/ui/LoadingSpinner';
import { UserNameBlock } from '@components/ui/UserNameBlock';

import { SearchPath } from '@/constants/textConstant';
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
			{data.length === 0 && <div>results not found</div>}
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
							{(data as User[]).map(({ id, name, avatarImage, nickname }) => (
								<UserNameBlock
									key={id}
									name={name}
									avatarImage={avatarImage}
									id={id}
									clearSearch={clearSearch}
									nickname={nickname}
								/>
							))}
						</>
					)}
				</div>
			)}
		</div>
	);
});
