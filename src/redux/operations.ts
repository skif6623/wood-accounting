import { createAsyncThunk } from '@reduxjs/toolkit';
import { roundWoodItem } from './roundWoodSlice';
import { boardItem } from './boardSlice';
import { productionItem } from './productionSlice';
import { InProgressWood } from './InProgressWoodSlice';
import { InProgressDesk } from './inProgressDeskSlice';
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
        console.log(res.data);
    return res.data;
  } catch (error) {
    return rejectWithValue('Server error');
  }
});

export const getProduction = createAsyncThunk<
  productionItem[],
  undefined,
  { rejectValue: string }
>('pallets/getProduction', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get('/production');
    console.log(res.data);
    return res.data;
  } catch (error) {
    return rejectWithValue('Server error');
  }
});

export const getProgressWood = createAsyncThunk<
  InProgressWood[],
  undefined,
  { rejectValue: string }
>('/InProgressWood', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get('/inProgressWood');
    console.log(res.data);
    
    return res.data;
  } catch (error) {
    return rejectWithValue('Server error');
  }
});

export const getProgressDesk = createAsyncThunk<
  InProgressDesk[],
  undefined,
  { rejectValue: string }
>('/inProgressDesk', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get('/inProgressDesk');
    console.log(res.data);
    
    return res.data;
  } catch (error) {
    return rejectWithValue('Server error');
  }
});