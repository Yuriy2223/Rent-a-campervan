import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestCampers } from "../../services/Api";
import {validateCampersData} from "../../components/ValidationSchema/validateCampersData/validateCampersData"
import { toast } from "react-hot-toast";


export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    try {
      const data = await requestCampers();

      if (!Array.isArray(data) || !validateCampersData(data)) {
        throw new Error("Invalid data format");
      }

      return data;
    } catch (error) {
      toast.error(
        "Error fetching campers. Try reloading the page or come back later."
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
