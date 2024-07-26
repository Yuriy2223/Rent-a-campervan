import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestCampers } from "../../services/Api";
import { toast } from "react-hot-toast";

const validateCampersData = (data) => {
  return data.every(
    (camber) =>
      camber._id &&
      camber.name &&
      camber.price &&
      camber.rating &&
      camber.location &&
      camber.adults !== undefined &&
      camber.children !== undefined &&
      camber.engine &&
      camber.transmission &&
      camber.form &&
      camber.length &&
      camber.width &&
      camber.height &&
      camber.tank &&
      camber.consumption &&
      camber.description &&
      camber.details &&
      typeof camber.details === "object" &&
      camber.gallery &&
      Array.isArray(camber.gallery) &&
      camber.reviews &&
      Array.isArray(camber.reviews) &&
      camber.reviews.every(
        (review) =>
          review.reviewer_name &&
          review.reviewer_rating !== undefined &&
          review.comment
      )
  );
};

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
