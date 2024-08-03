import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AuthChecker } from '@components/AuthChecker';
import { SuspenseLayoutForAuthBlock, SuspenseLayoutForMainContent } from '@components/Layouts';

import { ContentBlock } from '@/components/Content';
import { Paths } from '@/constants/routerPaths';
import { Home, Login, Registration } from '@/pages';
import { Feed } from '@/pages/Feed';
import { TweetPage } from '@/pages/TweetPage';

export const rootRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route path={Paths.HOME} errorElement="Error">
			<Route element={<AuthChecker />}>
				<Route element={<SuspenseLayoutForAuthBlock />}>
					<Route index element={<Home />} />
					<Route path={Paths.LOGIN} element={<Login />} />
					<Route path={Paths.REGISTRATION} element={<Registration />} />
				</Route>
				<Route element={<SuspenseLayoutForMainContent />}>
					<Route path={Paths.FEED} element={<Feed />} />
					<Route path={Paths.PROFILE + Paths.ID} element={<ContentBlock />} />
					<Route path={Paths.TWEET + Paths.ID} element={<TweetPage />} />
				</Route>
			</Route>
			<Route path={Paths.NOT_FOUND} element="Not found" />
		</Route>
	)
);
