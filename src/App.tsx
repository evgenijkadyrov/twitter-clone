import viteLogo from '@assets/images/twitter.svg';
import reactLogo from '@assets/react.svg';
import { Content } from '@components/Content/content.styled';
import { Header } from '@components/Header';
import { SearchBar } from '@components/SearchBar/rightSide.styled';
import { SideBar } from '@components/SideBar/sideBar.styled';

import { Section } from '@/components/Layouts/layouts.styled';
import { GlobalStyles } from '@/style/globals';

const App = () => (
	<>
		<GlobalStyles />
		<Section>
			<SideBar>left</SideBar>
			<Content>central</Content>
			<SearchBar>right</SearchBar>
		</Section>

		<div>
			<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
				<img src={viteLogo as string} className="logo" alt="Vite logo" />
			</a>
			<a href="https://react.dev" target="_blank" rel="noreferrer">
				<img src={reactLogo as string} className="logo react" alt="React logo" />
			</a>
		</div>
		<Header />
	</>
);

export default App;
