import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshCurrentUser } from './operations';

export interface UserType {
  name: string | null;
  email: string | null;
}

interface InitialStateType {
  name: string | null;
  email: string | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isRegister: boolean;
}

const initialState: InitialStateType = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isRegister: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.isRegister = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRegister = true;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(login.pending, (state, action) => state)
      .addCase(logout.fulfilled, state => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRegister = false;
      })
      .addCase(refreshCurrentUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRegister = true;
        state.isRefreshing = false;
      })
      .addCase(refreshCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
