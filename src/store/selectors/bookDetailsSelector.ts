import { RootState } from "../store";

export const getBookDetails = (state: RootState) => state.bookISBN;
