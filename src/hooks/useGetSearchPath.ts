import { useLocation } from 'react-router-dom';

import { Paths } from '@/constants/routerPaths';
import { SearchPath } from '@/constants/textConstant';

export const useGetSearchPath = (): string => {
	const location = useLocation();
	const searchPath =
		location.pathname === Paths.FEED.toString() ? SearchPath.users : SearchPath.tweets;
	return searchPath;
};
