import { KeyboardEvent, SyntheticEvent, useState } from 'react';
import { SearchList } from '@components/SearchBar/SearchList';
import { collection, getDocs, orderBy, query, startAt, where } from 'firebase/firestore';

import searchIcon from '@/assets/icons/search.svg';
import { TweetResponse } from '@/components';
import { db } from '@/firebase';
import { User } from '@/store/userSlice';

import { Aside, Container, Icon, SearchBarContainer, Title } from './searchInput.styled';

export enum SearchFields {
	users = 'name',
	tweets = 'text',
}

export const SearchInput = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [tweetItems, setTweetItems] = useState<TweetResponse[]>([]);

	const onChangeHandler = (e: SyntheticEvent) => {
		const target = e.target as HTMLInputElement;
		setSearchValue(target.value);
	};

	const clearSearch = (): void => {
		setSearchValue('');
	};

	const getTweets = async () => {
		const tweetQuery = query(
			collection(db, 'tweets'),
			orderBy('tweetContent', 'asc'),
			startAt(searchValue)
		);
		// const tweetQuery = query(collection(db, 'tweets'), where('tweetContent','==',searchValue));
		const tweetSnapshot = await getDocs(tweetQuery);
		const tweetPromises: Promise<TweetResponse>[] = tweetSnapshot.docs.map(async (doc) => {
			const userDataQuery = query(collection(db, 'users'), where('id', '==', doc.data().userId));
			const userDataSnapshot = await getDocs(userDataQuery);
			const userData = userDataSnapshot.docs[0]?.data() as User;
			const { nickname, name }: User = userData;
			return {
				...doc.data(),
				id: doc.id,
				authorName: name,
				authorNickname: nickname,
			} as TweetResponse;
		});
		const tweets: Awaited<TweetResponse>[] = await Promise.all(tweetPromises);
		setTweetItems(tweets);
	};
	const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			getTweets().catch((error) => {
				console.error('Error getting tweets:', error);
			});
		}
	};

	return (
		<Aside>
			<Container>
				<Icon src={searchIcon} alt="search" />
				<SearchBarContainer
					placeholder="Search Twitter"
					value={searchValue}
					onChange={onChangeHandler}
					onKeyPress={handleKeyPress}
				/>
			</Container>
			{searchValue && (
				<>
					<Title>Search Results</Title>
					<SearchList tweetItems={tweetItems} clearSearch={clearSearch} />
				</>
			)}
		</Aside>
	);
};
