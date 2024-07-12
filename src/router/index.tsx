import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { CheckAuth } from '@components/Auth';
import { ContentBlock } from '@components/Content';
import { SuspenseLayoutForAuthBlock, SuspenseLayoutForMainContent } from '@components/Layouts';

import { Paths } from '@/constants/routerPaths';
import { Home, Login, Registration } from '@/pages';

export const rootRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route path={Paths.HOME} errorElement="Error">
			<Route element={<CheckAuth />}>
				<Route element={<SuspenseLayoutForAuthBlock />}>
					<Route index element={<Home />} />
					<Route path={Paths.LOGIN} element={<Login />} />
					<Route path={Paths.REGISTRATION} element={<Registration />} />
				</Route>
				<Route element={<SuspenseLayoutForMainContent />}>
					<Route path={Paths.FEED} element="Feed" />
					<Route path={Paths.PROFILE + Paths.PROFILE_ID} element={<ContentBlock />} />
				</Route>
			</Route>
			<Route path={Paths.NOT_FOUND} element="Not found" />
		</Route>
	)
);
