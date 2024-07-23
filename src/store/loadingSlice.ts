import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
	isLoading: boolean;
}

const initialState: InitialState = {
	isLoading: false,
};
const loadingSlice = createSlice({
	name: 'isLoading',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => ({
			isLoading: action.payload,
		}),
	},
});
export const { actions: loadingActions, reducer: loadingReducer } = loadingSlice;
