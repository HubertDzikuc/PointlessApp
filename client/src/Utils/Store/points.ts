import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PointsState {
	value: number
}

const initialState: PointsState = { value: 0 };

export const pointsSlice = createSlice({
	name: "points",
	initialState,
	reducers: {
		updatePoints: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		setPoints: (state, action: PayloadAction<number>) => {
			state.value = action.payload;
		},
	},
});

export const { updatePoints, setPoints } = pointsSlice.actions;
export default pointsSlice.reducer;