import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import woodData from "../../components/fakeWoodData/wood.json";

interface WoodItem {
  diametr: number;
  name: string;
  amount: number;
  id: number;
}


interface AllWoodState {
  woodItems: WoodItem[];
  inputAmounts: { [id: string]: number };
  selectedItemsData: WoodItem[];
  historyData: WoodItem[];
}

const initialState: AllWoodState = {
  woodItems: woodData,
  inputAmounts: {},
  selectedItemsData: [],
  historyData: [],
};

const allWoodSlice = createSlice({
  name: "allWood",
  initialState,
  reducers: {
    deleteSelectedItems: (state) => {
      const dataToDelete = state.selectedItemsData.map((item) => ({ ...item, realDate: new Date().toISOString() }));
      state.historyData.push(...dataToDelete);
      state.selectedItemsData = [];
    },
    addToSelectedItemsData: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const selectedItem = state.woodItems.find((item) => item.id === parseInt(id));
      if (selectedItem && state.inputAmounts[id] && state.inputAmounts[id] > 0) {
        const updatedWoodItems = state.woodItems.map((item) =>
          item.id === parseInt(id)
            ? {
                ...item,
                amount: item.amount - state.inputAmounts[id],
              }
            : item
        );

        if (state.selectedItemsData.some((item) => item.id === parseInt(id))) {
          state.selectedItemsData = state.selectedItemsData.map((item) =>
            item.id === parseInt(id)
              ? {
                  ...item,
                  amount: item.amount + state.inputAmounts[id],
                }
              : item
          );
        } else {
          state.selectedItemsData.push({ ...selectedItem, amount: state.inputAmounts[id] });
        }

        state.inputAmounts[id] = 0;
        state.woodItems = updatedWoodItems;
      }
    },
    updateInputAmount: (state, action: PayloadAction<{ id: string; amount: number }>) => {
      const { id, amount } = action.payload;
      state.inputAmounts[id] = amount;
    },
  },
});

export const { deleteSelectedItems, addToSelectedItemsData, updateInputAmount } = allWoodSlice.actions;
export default allWoodSlice.reducer;