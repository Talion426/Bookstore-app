import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";
import newBooksReducer from "./slices/newBooksSlice";
import searchBooksReduser from "./slices/searchSlice";
import bookReducer from "./slices/bookSlice";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userReduser,
    newBooks: newBooksReducer,
    searchBooks: searchBooksReduser,
    bookISBN: bookReducer,
  },
});
