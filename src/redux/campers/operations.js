import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestCampers } from "../../services/Api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    try {
      const data = await requestCampers();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
