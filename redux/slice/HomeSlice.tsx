import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import { homeApi } from "@/api/homeApi";

export const fetchGetRecords = createAsyncThunk(
  "FilterSlice/fetchGetFilters",
  async (_, { rejectWithValue }) => {
    try {
      const data = await homeApi.get();
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue("An error occurred");
    }
  }
);

const initialState = {
  isLoading: false,
};

const HomeSlice = createSlice({
  name: "FilterSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* fetchGetFilters */
    builder.addCase(fetchGetRecords.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetRecords.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchGetRecords.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const selectIsLoading = (state: RootState) =>
  state.homeReducer.isLoading;

export const { reducer: homeReducer, actions: homeActions } = HomeSlice;
