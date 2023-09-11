import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRoundWood } from "./operations";

export interface roundWoodItem {
  diametr: number;
  name: string;
  length: number;
  amount: number;
  code: string;
  checked: boolean; 
  status: string;
}

const initialState: roundWoodItem[] = [];

export const roundWoodSlice = createSlice({
  name: "roundWood",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoundWood.fulfilled, (_, action: PayloadAction<roundWoodItem[]>) => {
      return action.payload;
    });
  },
});

export const roundWoodReducer = roundWoodSlice.reducer;













// import {createSlice} from "@reduxjs/toolkit";
// import {getRoundWood} from "./operations";

// export interface roundWoodItem {
// 	diametr: number;
// 	name: string;
// 	amount: number;
// 	code: number;
// 	id: string;
// }

// const initialState: roundWoodItem[] = [];



//  interface InitialStateType {
//     diametr: {
//         type: Number,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     amount: {
//         type: Number,
//         required: true
//     },
//     code: {
//         type: String,
//         required: true
//     },
//     checked: {
//         type: Boolean,
//         default: false
//     },
//     status: {
//     type: String,
//         enum: statusList,
//         required: true
//     },
//         owner: {
//         type: Schema.Types.ObjectId,
//         ref: "user",
//         required: true,
//     }

// }

// // const initialState: InitialStateType = {
// //   name: null,
// //   email: null,
// //   token: null,
// //   isLoggedIn: false,
// // };


// export const roundWoodSlice = createSlice({
// 	name: "roundWood",
// 	initialState: initialState,
// 	reducers: {},
// 	extraReducers: builder => {
// 		builder.addCase(getRoundWood.fulfilled, (_, action) => {
// 			return action.payload;
// 		});
// 	},
// });

// export const roundWoodReducer = roundWoodSlice.reducer;


