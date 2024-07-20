import { SearchPath } from '@components/SearchBar/SearchContainer';
import { SearchItem } from '@components/SearchBar/SearchItem';
import { UserNameBlock } from '@components/ui/userNameBlock';

import { TweetResponse } from '@/components';
import { User } from '@/store/userSlice';

interface SearchAbstractProps {
	searchPath: string;
	data: TweetResponse[] | User[];
	clearSearch: () => void;
}
export const SearchAbstract = ({ searchPath, data, clearSearch }: SearchAbstractProps) => (
	<div>
		{searchPath === SearchPath.tweets.toString() ? (
			<>
				{data.map((data) => (
					<SearchItem key={data.id} data={data as TweetResponse} clearSearch={clearSearch} />
				))}
			</>
		) : (
			<>
				{(data as User[]).map(({ name, nickname, id, avatarImage }) => (
					<UserNameBlock
						key={id}
						name={name}
						avatarImage={avatarImage}
						id={id}
						nickname={nickname}
					/>
				))}
			</>
		)}
	</div>
);
