// import {configureStore} from "@reduxjs/toolkit";
// import {allWoodReducer} from "./allWoodSlice";

// export const store = configureStore({
// 	reducer: {
// 		wood: allWoodReducer,
// 	},
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
import { configureStore } from "@reduxjs/toolkit";
import { allWoodSlice } from "./allWoodSlice";

export const store = configureStore({
  reducer: {
    wood: allWoodSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;