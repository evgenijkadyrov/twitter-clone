import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Content } from '@components/Content/content.styled';
import { SearchBar } from '@components/SearchBar/';
import { SideBar } from '@components/SideBar';

import { Section } from './layouts.styled';

export const SuspenseLayoutForAuthBlock: FC = () => (
	<Suspense fallback={<div>Loading</div>}>
		<Outlet />
	</Suspense>
);

export const SuspenseLayoutForMainContent: FC = () => (
	<Section>
		<SideBar />
		<Suspense fallback={<div>Loading</div>}>
			<Content>
				<Outlet />
			</Content>
		</Suspense>
		<SearchBar />
	</Section>
);
