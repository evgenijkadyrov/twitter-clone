import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { rootRouter } from '@/router';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={rootRouter}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);