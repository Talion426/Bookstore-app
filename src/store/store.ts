import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";
import newBooksReducer from "./slices/newBooksSlice";
import searchBooksReduser from "./slices/searchSlice";
import bookDetailsReducer from "./slices/bookDetailsSlice";
import favoriteReducer from "./slices/favoriteSlice";
import cartReducer from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userReduser,
    newBooks: newBooksReducer,
    searchBooks: searchBooksReduser,
    bookISBN: bookDetailsReducer,
    favoriteBooks: persistedFavoriteReducer,
    cartBooks: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
