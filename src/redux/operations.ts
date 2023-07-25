import {createAsyncThunk} from "@reduxjs/toolkit";
import {WoodItemType} from "./allWoodSlice";
import axios from "axios";

axios.defaults.baseURL = "https://64c006200d8e251fd111d833.mockapi.io";

export const getAllWood = createAsyncThunk<WoodItemType[], undefined, {rejectValue: string}>(
	"wood/getAllWood",
	async (_, {rejectWithValue}) => {
		try {
			const res = await axios.get("wood-accouting");
			return res.data;
		} catch (error) {
			return rejectWithValue("Server error");
		}
	},
);
