import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { restBooksAPI } from "services";
import { IResponseSearch, ISearchResult } from "types";

interface ISearchBook {
  result: IResponseSearch;
  isLoading: boolean;
  error: null | string;
}

const initialState: ISearchBook = {
  result: {} as IResponseSearch,
  isLoading: false,
  error: null,
};

export const fetchSearchBooks = createAsyncThunk<
  IResponseSearch,
  ISearchResult,
  { rejectValue: string }
>("search/fetchSearchBooks", async (params, { rejectWithValue }) => {
  try {
    return await restBooksAPI.searchBooks(params);
  } catch (error) {
    const errorResponse = error as AxiosError;
    return rejectWithValue(errorResponse.message);
  }
});

const searchBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearchBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.result.books = payload.books;
      state.result.page = payload.page;
      state.result.total = payload.total;
    });
    builder.addCase(fetchSearchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = true;
        state.error = payload;
      }
    });
  },
});

export default searchBooksSlice.reducer;
