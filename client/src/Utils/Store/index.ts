import { configureStore } from '@reduxjs/toolkit';
import points from './points';

export const store = configureStore({
	reducer: {
		points,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
