import { configureStore } from "@reduxjs/toolkit";
import allWoodReducer from "../redux/features/allWoodSlice";
import addWoodReducer from "../redux/features/addWoodSlice";

const store = configureStore({
  reducer: {
    allWood: allWoodReducer,
    addWood: addWoodReducer,
  },
});

export default store;