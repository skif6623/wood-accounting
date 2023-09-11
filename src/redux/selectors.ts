import type { RootState } from './store';

export const isRegisterSelector = (state: RootState) => state.auth.isRegister;
export const loggedInSelector = (state: RootState) => state.auth.isLoggedIn;
export const refreshSelector = (state: RootState) => state.auth.isRefreshing;
export const userSelector = (state: RootState) => state.auth.name;
export const boardSelector = (state: RootState) => state.board;
export const roundWoodSelector = (state: RootState) => state.roundWood;
export const productionSlector = (state: RootState) => state.production;
