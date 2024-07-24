import { createSlice } from '@reduxjs/toolkit';

export interface ThemeProps {
	isDarkTheme: boolean;
}
const initialState: ThemeProps = {
	isDarkTheme: false,
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => ({ isDarkTheme: !state.isDarkTheme }),
	},
});

export const { actions: themeActions, reducer: themeReducer } = themeSlice;
