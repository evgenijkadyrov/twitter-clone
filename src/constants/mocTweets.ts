import { Timestamp } from 'firebase/firestore';

export interface Tweet {
	userId: string;
	authorName: string;
	authorNickname: string | null;
	createdAt: Timestamp;
	tweetContent: string;
	tweetImage: string | null;
	likedList: string[];
	avatarImage: string;
}
// export const tweets: Tweet[] = [
// 	{
// 		authorName: 'John Doe',
// 		userId: '1',
// 		authorNickname: '@johndoe',
// 		createdAt: '2022-01-01',
// 		tweetContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
// 		tweetImage:
// 			'https://img.freepik.com/premium-photo/aerial-view-small-town-dobrush-belarus_77190-6500.jpg?w=996',
// 		likedList: [],
// 	},
// 	{
// 		userId: '2',
// 		authorName: 'Jane Smith',
// 		authorNickname: '@janesmith',
// 		createdAt: '2022-01-02',
// 		tweetContent: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
// 		tweetImage:
// 			'https://img.freepik.com/premium-photo/african-elephant-walking-national-park-savannah_77190-22421.jpg?w=996',
// 		likedList: [],
// 	},
// 	{
// 		userId: '2',
// 		authorName: 'Jane Smith',
// 		authorNickname: '@janesmith',
// 		createdAt: '2022-01-02',
// 		tweetImage:null,
// 		tweetContent:
// 			'https://img.freepik.com/premium-photo/dog-relaxing-sandy-beach_77190-23406.jpg?w=996',
// 		likedList: ['2'],
// 	},
// 	{
// 		userId: '3',
// 		authorName: 'Alice Johnson',
// 		authorNickname: '@alicejohnson',
// 		createdAt: '2022-01-03',
// 		tweetContent: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
// 		tweetImage: null,
// 		likedList: ['2','1'],
// 	},
// ];
