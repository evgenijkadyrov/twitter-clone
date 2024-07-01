import { useState } from 'react';
import reactLogo from '@assets/react.svg';
import { Header } from '@components/Header';

import viteLogo from '@assets/vite.svg';

import './App.css';

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo as string} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img
						src={reactLogo as string}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<Header />
			<h1>Vite + React</h1>
			<div className="card">
				<button
					onClick={() => setCount((prevState) => prevState + 1)}
					type="button"
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
};

export default App;
