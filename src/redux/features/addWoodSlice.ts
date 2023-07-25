import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WoodItem {
  diametr: number;
  name: string;
  amount: number;
  id: number;
}

interface AddWoodState {
  woodItems: WoodItem[];
}

const initialState: AddWoodState = {
  woodItems: [],
};

const addWoodSlice = createSlice({
  name: "addWood",
  initialState,
  reducers: {
    addWoodItem: (state, action: PayloadAction<WoodItem>) => {
      state.woodItems.push(action.payload);
    },
  },
});

export const { addWoodItem } = addWoodSlice.actions;
export default addWoodSlice.reducer;