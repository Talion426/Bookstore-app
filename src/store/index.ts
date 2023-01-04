import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { getNewBooks } from "./selectors/newBooksSelectors";
import { getSearchBooks } from "./selectors/searchBooksSelectors";
import { getBookDetails } from "./selectors/bookDetailsSelector";
import { getFavoriteBooks } from "./selectors/favoriteBooksSelector";
import { getCartBooks } from "./selectors/cartSelector";
import { getUser } from "./selectors/userSelectors";
import { fetchNewBooks } from "./slices/newBooksSlice";
import { fetchSearchBooks } from "./slices/searchSlice";
import { fetchGetBookDetails } from "./slices/bookDetailsSlice";
import { addFavorite, deleteFavorite } from "./slices/favoriteSlice";
import { addBook, deleteBook, incAmount, decAmount, getBooksTotalPrice } from "./slices/cartSlice";
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
  getCartBooks,
  getUser,
  fetchGetBookDetails,
  fetchSearchBooks,
  fetchNewBooks,
  addFavorite,
  addBook,
  deleteBook,
  incAmount,
  decAmount,
  getBooksTotalPrice,
  deleteFavorite,
  setUser,
  removeUser,
};
