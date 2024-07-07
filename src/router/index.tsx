import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { SuspenseLayoutForAuthBlock, SuspenseLayoutForMainContent } from '@components/Layouts';

import { Paths } from '@/constants/routerPaths';
import { Home } from '@/pages/Home';

export const rootRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route path={Paths.HOME} errorElement="Error">
			<Route element={<SuspenseLayoutForAuthBlock />}>
				<Route index element={<Home />} />
				<Route path={Paths.LOGIN} element="Login" />
				<Route path={Paths.REGISTRATION} element="Register" />
			</Route>
			<Route element={<SuspenseLayoutForMainContent />}>
				<Route path={Paths.FEED} element="Feed" />
				<Route path={Paths.PROFILE} element="Profile" />
			</Route>
			<Route path={Paths.NOT_FOUND} element="Not found" />
		</Route>
	)
);
