import { createAsyncThunk } from '@reduxjs/toolkit';
import { roundWoodItem } from './roundWoodSlice';
import { boardItem } from './boardSlice';
import axios from 'axios';

axios.defaults.baseURL = 'https://avk-pallet-backend.onrender.com/api';

export const getRoundWood = createAsyncThunk<
  roundWoodItem[],
  undefined,
  { rejectValue: string }
>('/wood', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get('/wood');
    console.log(res.data);
    
    return res.data;
  } catch (error) {
    return rejectWithValue('Server error');
  }
});


export const getBoard = createAsyncThunk<
  boardItem[],
  undefined,
  { rejectValue: string }
>('board/getBoard', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get('/desks');
    return res.data;
  } catch (error) {
    return rejectWithValue('Server error');
  }
});



