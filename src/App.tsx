import { RouterProvider } from 'react-router-dom';

import { rootRouter } from '@/router';
import { GlobalStyles } from '@/style/globals';

const App = () => (
	<>
		<GlobalStyles />
		<RouterProvider router={rootRouter} fallbackElement="Loading" />
	</>
);

export default App;
