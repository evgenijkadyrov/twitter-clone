import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Notification } from '@components/Notification';
import { ThemeProvider } from 'styled-components';

import { rootRouter } from '@/router';
import { themeSelector } from '@/store/selectors';
import { GlobalStyles } from '@/style/globals';
import { DarkTheme, LightTheme } from '@/style/themes';

const App = () => {
	const { isDarkTheme } = useSelector(themeSelector);
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
				<Notification />
				<RouterProvider router={rootRouter} fallbackElement="Loading" />
			</ThemeProvider>
		</>
	);
};

export default App;
