import activeBookmarksIcon from '@/assets/icons/bookmark-bold.svg';
import bookmarksIcon from '@/assets/icons/bookmark-outline.svg';
import lightBookmarksIcon from '@/assets/icons/bookmark-outline-light.svg';
import exploreIcon from '@/assets/icons/explore.svg';
import activeExporeIcon from '@/assets/icons/explore-bold.svg';
import lightExploreIcon from '@/assets/icons/explore-light.svg';
import activeHomeIcon from '@/assets/icons/home-fill.svg';
import homeIcon from '@/assets/icons/home-outline.svg';
import lightHomeIcon from '@/assets/icons/home-outline-white.svg';
import activeListsIcon from '@/assets/icons/lists-bold.svg';
import listsIcon from '@/assets/icons/lists-outline.svg';
import lightListsIcon from '@/assets/icons/lists-outline-light.svg';
import activeMessagesIcon from '@/assets/icons/messages-bold.svg';
import messagesIcon from '@/assets/icons/messages-outline.svg';
import lightMessagesIcon from '@/assets/icons/messages-outline-light.svg';
import moreIcon from '@/assets/icons/more.svg';
import lightMoreIcon from '@/assets/icons/more-light.svg';
import activeNotificationsIcon from '@/assets/icons/notification-fill.svg';
import notificationsIcon from '@/assets/icons/notification-outline.svg';
import lightNotificationsIcon from '@/assets/icons/notification-outline-light.svg';
import activeProfileIcon from '@/assets/icons/profile-fill.svg';
import profileIcon from '@/assets/icons/profile-outline.svg';
import lightProfileIcon from '@/assets/icons/profile-outline-light.svg';
import { Paths } from '@/constants/routerPaths';

export interface NavLink {
	id: number;
	title: string;
	to: string;
	icon: string;
	lightIcon: string;
	activeIcon: string;
}
export const NAV_LINKS: NavLink[] = [
	{
		id: 1,
		title: 'Home',
		to: Paths.FEED,
		icon: homeIcon,
		lightIcon: lightHomeIcon,
		activeIcon: activeHomeIcon,
	},
	{
		id: 2,
		title: 'Explore',
		to: '#',
		icon: exploreIcon,
		lightIcon: lightExploreIcon,
		activeIcon: activeExporeIcon,
	},
	{
		id: 3,
		title: 'Notifications',
		to: '#',
		icon: notificationsIcon,
		lightIcon: lightNotificationsIcon,
		activeIcon: activeNotificationsIcon,
	},
	{
		id: 4,
		title: 'Messages',
		to: '#',
		icon: messagesIcon,
		lightIcon: lightMessagesIcon,
		activeIcon: activeMessagesIcon,
	},
	{
		id: 5,
		title: 'Bookmarks',
		to: '#',
		icon: bookmarksIcon,
		lightIcon: lightBookmarksIcon,
		activeIcon: activeBookmarksIcon,
	},
	{
		id: 6,
		title: 'Lists',
		to: '#',
		icon: listsIcon,
		lightIcon: lightListsIcon,
		activeIcon: activeListsIcon,
	},
	{
		id: 7,
		title: 'Profile',
		to: Paths.PROFILE,
		icon: profileIcon,
		lightIcon: lightProfileIcon,
		activeIcon: activeProfileIcon,
	},
	{
		id: 8,
		title: 'More',
		to: '#',
		icon: moreIcon,
		lightIcon: lightMoreIcon,
		activeIcon: moreIcon,
	},
];
