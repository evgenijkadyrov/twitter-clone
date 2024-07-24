import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Notification } from '@components/Notification';
import { ErrorBoundary } from '@components/ui/ErrorBoundary';
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
				<ErrorBoundary>
					<Notification />
					<RouterProvider router={rootRouter} fallbackElement="Loading" />
				</ErrorBoundary>
			</ThemeProvider>
		</>
	);
};

export default App;
