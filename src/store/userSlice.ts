import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
	id: string | null;
	name: string | null;
	email: string | null;
	token: string | null;
	phoneNumber: string | null;
	birthDate: string | null;
	description?: string | null;
	nickname?: string | null;
	avatarImage?: string | null;
}

const initialState: User = {
	id: null,
	name: null,
	email: null,
	token: null,
	phoneNumber: null,
	birthDate: null,
	nickname: null,
	avatarImage: null,
	description: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchUser: (_, action: PayloadAction<User>) => ({ ...action.payload }),
		logout: () => ({ ...initialState }),
		updateUser: (state, action: PayloadAction<User>) => ({ ...state, ...action.payload }),
	},
});
export const { actions: userActions, reducer: userReducer } = userSlice;
