import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { getNewBooks } from "./selectors/newBooksSelectors";
import { fetchNewBooks } from "./slices/newBooksSlice";
import { persistor, store } from "./store";
import { fetchSearchBooks } from "./slices/searchSlice";
import { getSearchBooks } from "./selectors/searchBooksSelectors";
import { getBookDetails } from "./selectors/bookDetailsSelector";
import { fetchGetBookDetails } from "./slices/bookDetailsSlice";

export {
  store,
  persistor,
  useAppDispatch,
  useAppSelector,
  fetchNewBooks,
  getNewBooks,
  fetchSearchBooks,
  getSearchBooks,
  getBookDetails,
  fetchGetBookDetails,
};
