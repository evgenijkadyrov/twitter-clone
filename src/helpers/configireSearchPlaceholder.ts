import { SearchPath } from '@/constants/textConstant';

enum SearchPlaceholder {
	users = 'Search users',
	tweets = 'Search tweets',
}

export const configPlaceholder = (value: string): string =>
	value === SearchPath.users.toString() ? SearchPlaceholder.users : SearchPlaceholder.tweets;
