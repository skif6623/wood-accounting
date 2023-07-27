// import {createSlice} from "@reduxjs/toolkit";
// // import {AnyAction, PayloadAction} from "@reduxjs/toolkit";
// import {getAllWood} from "./operations";

// export interface WoodItemType {
// 	diametr: string;
// 	type: string;
// 	amount: number;
// 	code: number;
// 	id: string;
// }

// const initialState: WoodItemType[] = [];

// export const allWoodSlice = createSlice({
// 	name: "wood",
// 	initialState,
// 	reducers: {},
// 	extraReducers: builder => {
// 		builder.addCase(getAllWood.fulfilled, (state, action) => {
// 			return action.payload;
// 		});
// 	},
// });

// export const allWoodReducer = allWoodSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WoodItem {
  diametr: number;
  name: string;
  amount: number;
  id: string;
}

export interface DescItem {
  width: number;
  height: number;
  length: number;
  amount: number;
  type: string;
  id: string;
}




export interface AllWoodState {
  roundwoodArray: WoodItem[];
  boardArray: DescItem[];
}

const initialState: AllWoodState = {
  roundwoodArray: [],
  boardArray: [],
};

export const allWoodSlice = createSlice({
  name: "allWood",
  initialState,
  reducers: {
    setRoundwoodArray: (state, action: PayloadAction<WoodItem[]>) => {
      state.roundwoodArray = action.payload;
    },
    setBoardArray: (state, action: PayloadAction<DescItem[]>) => {
      state.boardArray = action.payload;
    },
  },
});

export const { setRoundwoodArray, setBoardArray } = allWoodSlice.actions;
export default allWoodSlice.reducer;