import type {RootState} from "./store";

export const boardSelector = (state: RootState) => state.board;
export const roundWoodSelector = (state: RootState) => state.roundWood;
