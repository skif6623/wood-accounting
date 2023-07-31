import {createAsyncThunk} from "@reduxjs/toolkit";
import {roundWoodItem} from "./roundWoodSlice";
import {BoardItem} from "./boardSlice";
import axios from "axios";

axios.defaults.baseURL = "https://64c006200d8e251fd111d833.mockapi.io";

export const getRoundWood = createAsyncThunk<roundWoodItem[], undefined, {rejectValue: string}>(
	"roundWood/getRoundWood",
	async (_, {rejectWithValue}) => {
		try {
			const res = await axios.get("wood-accouting");
			return res.data;
		} catch (error) {
			return rejectWithValue("Server error");
		}
	},
);

export const getBoard = createAsyncThunk<BoardItem[], undefined, {rejectValue: string}>(
	"board/getBoard",
	async (_, {rejectWithValue}) => {
		try {
			const res = await axios.get("boards");
			return res.data;
		} catch (error) {
			return rejectWithValue("Server error");
		}
	},
);
