import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
	id: string | null;
	name: string | null;
	email: string | null;
	token: string | null;
	phoneNumber: string | null;
	birthDate: string | null;
}

const initialState: User = {
	id: null,
	name: null,
	email: null,
	token: null,
	phoneNumber: null,
	birthDate: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchUser: (_, action: PayloadAction<User>) => ({ ...action.payload }),
	},
});
export const { actions: userActions, reducer: userReducer } = userSlice;
