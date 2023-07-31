import {configureStore} from "@reduxjs/toolkit";
import {boardSliceReducer} from "./boardSlice";
import {roundWoodReducer} from "./roundWoodSlice";

export const store = configureStore({
	reducer: {
		board: boardSliceReducer,
		roundWood: roundWoodReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
