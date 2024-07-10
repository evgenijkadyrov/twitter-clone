import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
	error: string | null;
	success: string | null;
}

const initialState: InitialState = {
	error: null,
	success: null,
};
const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		showError: (state, { payload }: PayloadAction<{ error: string | null }>) => ({
			...state,
			error: payload.error,
		}),
		showSuccess: (state, { payload }: PayloadAction<{ success: string | null }>) => ({
			...state,
			success: payload.success,
		}),
		clearNotification: () => ({ ...initialState }),
	},
});
export const { actions: notificationActions, reducer: notificationReducer } = notificationSlice;
