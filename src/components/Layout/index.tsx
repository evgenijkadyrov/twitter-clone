import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SuspenseLayout: FC = () => (
	<Suspense fallback={<div>Loading</div>}>
		<Outlet />
	</Suspense>
);
