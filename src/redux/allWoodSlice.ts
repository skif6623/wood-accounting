import {createSlice} from "@reduxjs/toolkit";
// import {AnyAction, PayloadAction} from "@reduxjs/toolkit";
import {getAllWood} from "./operations";

export interface WoodItemType {
	diametr: string;
	type: string;
	amount: number;
	code: number;
	id: string;
}

const initialState: WoodItemType[] = [];

export const allWoodSlice = createSlice({
	name: "wood",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAllWood.fulfilled, (state, action) => {
			state = action.payload;
		});
	},
});

export const allWoodReducer = allWoodSlice.reducer;
