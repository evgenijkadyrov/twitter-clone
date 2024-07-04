import viteLogo from '@assets/images/twitter.svg';
import reactLogo from '@assets/react.svg';
import { Header } from '@components/Header';
import { GlobalStyles } from '@theme';

const App = () => (
	<>
		<GlobalStyles />
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
