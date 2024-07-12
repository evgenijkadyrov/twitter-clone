export interface Tweet {
	userId: string;
	tweetId: string;
	authorName: string;
	authorNickname: string;
	createdAt: string;
	tweetContent: string;
	tweetImage?: string | null;
	isLiked: boolean;
	countLikes: number;
}
export const tweets: Tweet[] = [
	{
		authorName: 'John Doe',
		userId: '1',
		tweetId: '1',
		authorNickname: '@johndoe',
		createdAt: '2022-01-01',
		tweetContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		tweetImage: 'https://example.com/image1.jpg',
		isLiked: true,
		countLikes: 10,
	},
	{
		userId: '2',
		tweetId: '2',
		authorName: 'Jane Smith',
		authorNickname: '@janesmith',
		createdAt: '2022-01-02',
		tweetContent: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		tweetImage: 'https://example.com/image2.jpg',
		isLiked: false,
		countLikes: 5,
	},
	{
		userId: '2',
		tweetId: '3',
		authorName: 'Jane Smith',
		authorNickname: '@janesmith',
		createdAt: '2022-01-02',
		tweetContent: 'dsdsdsd sds ff sds fsfsf bore et dolore magna aliqua.',
		tweetImage: 'https://example.com/image2.jpg',
		isLiked: true,
		countLikes: 25,
	},
	{
		userId: '3',
		tweetId: '4',
		authorName: 'Alice Johnson',
		authorNickname: '@alicejohnson',
		createdAt: '2022-01-03',
		tweetContent: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
		tweetImage: null,
		isLiked: true,
		countLikes: 15,
	},
];
