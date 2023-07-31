import {createSlice} from "@reduxjs/toolkit";
import {getBoard} from "./operations";

export interface BoardItem {
	width: number;
	height: number;
	length: number;
	amount: number;
	type: string;
	id: string;
}

const initialState: BoardItem[] = [];

export const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getBoard.fulfilled, (_, action) => {
			return action.payload;
		});
	},
});

export const boardSliceReducer = boardSlice.reducer;
