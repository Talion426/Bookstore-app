import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { restBooksAPI } from "services";
import { IResponseSearch, ISearchResult } from "types";

interface ISearchBook {
  results: IResponseSearch;
  isLoading: boolean;
  error: null | string;
}

const initialState: ISearchBook = {
  results: {} as IResponseSearch,
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
  name: "getSearchBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearchBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchSearchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results.books = payload.books;
      state.results.page = payload.page;
      state.results.total = payload.total;
    });

    builder.addCase(fetchSearchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchBooksSlice.reducer;
