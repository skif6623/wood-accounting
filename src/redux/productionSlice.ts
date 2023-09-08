import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getProduction} from "./operations";

export interface productionItem {
	// width: number;
	// height: number;
	// length: number;
	amount: number;
	code: string;
	// id: string;
	name: string;
	// checked: boolean;
	// status: string;
}

const initialState: productionItem[] = [];

export const productionSlice = createSlice({
	name: "production",
	 initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getProduction.fulfilled, (_, action: PayloadAction<productionItem[]>) => {
			return action.payload;
		});
	},
});

export const productionSliceReducer = productionSlice.reducer;
