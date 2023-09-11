import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getBoard} from "./operations";

export interface boardItem {
	width: number;
	height: number;
	lenght: number;
	amount: number;
	code: string;
	_id: string;
	name: string;
	checked: boolean;
	status: string;

}

const initialState: boardItem[] = [];

export const boardSlice = createSlice({
	name: "board",
	 initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getBoard.fulfilled, (_, action: PayloadAction<boardItem[]>) => {
			return action.payload;
		});
	},
});

export const boardSliceReducer = boardSlice.reducer;
