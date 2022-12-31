import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { getNewBooks } from "./selectors/newBooksSelectors";
import { getSearchBooks } from "./selectors/searchBooksSelectors";
import { getBookDetails } from "./selectors/bookDetailsSelector";
import { getFavoriteBooks } from "./selectors/favoriteBooksSelector";
import { fetchNewBooks } from "./slices/newBooksSlice";
import { fetchSearchBooks } from "./slices/searchSlice";
import { fetchGetBookDetails } from "./slices/bookDetailsSlice";
import { addFavorite, deleteFavorite } from "./slices/favoriteSlice";
import { setUser, removeUser } from "./slices/userSlice";
import { persistor, store } from "./store";

export {
  store,
  persistor,
  useAppDispatch,
  useAppSelector,
  getNewBooks,
  getSearchBooks,
  getBookDetails,
  getFavoriteBooks,
  fetchGetBookDetails,
  fetchSearchBooks,
  fetchNewBooks,
  addFavorite,
  deleteFavorite,
  setUser,
  removeUser,
};
