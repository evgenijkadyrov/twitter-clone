import { RootState } from '@/store/index';
import { InitialState } from '@/store/notificationSlice';

export const notificationSelector = (state: RootState): InitialState => state.notification;
