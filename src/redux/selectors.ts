import type { RootState } from './store';

export const loggedInSelector = (state: RootState) => state.auth.isLoggedIn;
export const userSelector = (state: RootState) => state.auth.name;
export const boardSelector = (state: RootState) => state.board;
export const roundWoodSelector = (state: RootState) => state.roundWood;
