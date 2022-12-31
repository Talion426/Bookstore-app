import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetails } from "types";

interface IFavorite {
  favorite: IBookDetails[];
}

const initialState: IFavorite = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favoriteBooks",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<IBookDetails>) => {
      const itemInCart = state.favorite.find((item) => item.isbn13 === action.payload.isbn13);
      if (!itemInCart) {
        state.favorite.push({
          ...action.payload,
        });
      }
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
      state.favorite = state.favorite.filter((book) => {
        return book.isbn13 !== action.payload;
      });
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
