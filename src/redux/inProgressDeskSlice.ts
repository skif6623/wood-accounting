import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProgressDesk } from "./operations";

export interface InProgressDesk {
  diametr: number;
  length: number;
  name: string;
  amount: number;
  code: string;
  checked: boolean; 
  status: string;
}

const initialState: InProgressDesk[] = [];

export const inProgressDesk = createSlice({
  name: "inProgressDesk",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProgressDesk.fulfilled, (_, action: PayloadAction<InProgressDesk[]>) => {
      return action.payload;
    });
  },
});

export const InProgressDeskReducer = inProgressDesk.reducer;


