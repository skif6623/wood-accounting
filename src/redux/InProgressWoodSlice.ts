import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProgressWood } from "./operations";

export interface InProgressWood {
  diametr: number;
  length: number;
  name: string;
  amount: number;
  code: string;
  checked: boolean; 
  status: string;
}

const initialState: InProgressWood[] = [];

export const roundWoodSlice = createSlice({
  name: "inProgressWood",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProgressWood.fulfilled, (_, action: PayloadAction<InProgressWood[]>) => {
      return action.payload;
    });
  },
});

export const InProgressWoodReducer = roundWoodSlice.reducer;


