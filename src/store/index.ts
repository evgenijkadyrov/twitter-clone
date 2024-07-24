import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage';

import { loadingReducer } from '@/store/loadingSlice';
import { notificationReducer } from '@/store/notificationSlice';
import { themeReducer } from '@/store/themeSlice';
import { userReducer } from '@/store/userSlice';

const rootReducer = combineReducers({
	user: userReducer,
	notification: notificationReducer,
	theme: themeReducer,
	loading: loadingReducer,
});
const persistConfig = {
	key: 'root',
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);

declare global {
	interface Window {
		Cypress?: unknown;
		store?: typeof store;
	}
}

if (typeof window !== 'undefined' && window.Cypress) {
	window.store = store;
}
