import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Content } from '@components/Content/content.styled';
import { SearchBar } from '@components/SearchBar/';
import { SideBar } from '@components/SideBar';
import { LoadingSpinner } from '@components/ui/LoadingSpinner';

import { Section } from './layouts.styled';

export const SuspenseLayoutForAuthBlock = () => (
	<Suspense fallback={<LoadingSpinner />}>
		<Outlet />
	</Suspense>
);

export const SuspenseLayoutForMainContent = () => (
	<Section>
		<SideBar />
		<Suspense fallback={<LoadingSpinner />}>
			<Content>
				<Outlet />
			</Content>
		</Suspense>
		<SearchBar />
	</Section>
);
