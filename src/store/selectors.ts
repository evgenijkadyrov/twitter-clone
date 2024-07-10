import { RootState } from '@/store/index';
import { InitialState } from '@/store/notificationSlice';
import { User } from '@/store/userSlice';

export const notificationSelector = (state: RootState): InitialState => state.notification;
export const userSelector = (state: RootState): User => state.user;
