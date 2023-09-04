import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { UserType } from './authSlice';

interface loginResponseType {
  name: string;
  email: string;
  token: string;
}

interface loginCredentialsType {
  email: string;
  password: string;
}

interface credentialsTypes {
  name: string;
  email: string;
  password: string;
}

axios.defaults.baseURL = 'https://avk-pallet-backend.onrender.com/api';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk<
  UserType,
  credentialsTypes,
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const res = await axios.post('/auth/register', credentials);
    return res.data;
  } catch (error) {
    return rejectWithValue('Server error');
  }
});

export const login = createAsyncThunk<
  loginResponseType,
  loginCredentialsType,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    token.set(data.token);
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || 'Server error');
    }
    return rejectWithValue('Server error');
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      token.unset();
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'Server error');
      }
      return rejectWithValue('Server error');
    }
  }
);
