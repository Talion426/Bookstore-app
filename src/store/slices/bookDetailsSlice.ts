import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { restBooksAPI } from "services";
import { IBookISBN13, IBookDetails } from "types";

interface IGetBookDetails {
  results: IBookDetails;
  isLoading: boolean;
  error: null | string;
}

const initialState: IGetBookDetails = {
  results: {} as IBookDetails,
  isLoading: false,
  error: null,
};

export const fetchGetBookDetails = createAsyncThunk<
  IBookDetails,
  IBookISBN13,
  { rejectValue: string }
>("getBookDetails/fetchGetBook", async (params, { rejectWithValue }) => {
  try {
    return await restBooksAPI.getBookDetails(params);
  } catch (error) {
    const errorResponse = error as AxiosError;

    return rejectWithValue(errorResponse.message);
  }
});

const bookDetailsSlice = createSlice({
  name: "getBookDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGetBookDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchGetBookDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });

    builder.addCase(fetchGetBookDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default bookDetailsSlice.reducer;
