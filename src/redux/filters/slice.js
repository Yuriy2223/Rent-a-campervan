import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  details: {
    airConditioner: false,
    automatic: false,
    kitchen: false,
    TV: false,
    shower: false,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    locations(state, action) {
      state.location = action.payload;
    },
    forms(state, action) {
      state.form = action.payload;
    },
    allDetails(state, action) {
      state.details = action.payload;
    },
  },
});

export const { locations, forms, allDetails } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
