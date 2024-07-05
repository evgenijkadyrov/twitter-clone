import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { rootRouter } from '@/router';
import { GlobalStyles } from '@/style/globals';
import { DarkTheme, LightTheme } from '@/style/themes';

const isDarkTheme = false;
const App = () => (
	<>
		<GlobalStyles />
		<ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
			<RouterProvider router={rootRouter} fallbackElement="Loading" />
		</ThemeProvider>
	</>
);

export default App;
