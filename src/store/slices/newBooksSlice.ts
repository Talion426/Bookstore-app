import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { restBooksAPI } from "services";
import { IBook } from "types";

interface INewBook {
  results: IBook[];
  isLoading: boolean;
  error: null | string;
}

const initialState: INewBook = {
  results: [],
  isLoading: false,
  error: null,
};

export const fetchNewBooks = createAsyncThunk<IBook[]>(
  "newBooks/fetchNewBooks",
  async (params, { rejectWithValue }) => {
    try {
      return (await restBooksAPI.getNewBooks()).books;
    } catch (error) {
      const errorResponse = error as AxiosError;

      return rejectWithValue(errorResponse.message);
    }
  },
);

const newBooksSlice = createSlice({
  name: "getNewBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchNewBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });

    builder.addCase(fetchNewBooks.rejected, (state, { payload }: any) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default newBooksSlice.reducer;
