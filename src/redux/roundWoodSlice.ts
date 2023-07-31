import {createSlice} from "@reduxjs/toolkit";
import {getRoundWood} from "./operations";

export interface roundWoodItem {
	diametr: number;
	name: string;
	amount: number;
	code: number;
	id: string;
}

const initialState: roundWoodItem[] = [];

export const roundWoodSlice = createSlice({
	name: "roundWood",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getRoundWood.fulfilled, (_, action) => {
			return action.payload;
		});
	},
});

export const roundWoodReducer = roundWoodSlice.reducer;
