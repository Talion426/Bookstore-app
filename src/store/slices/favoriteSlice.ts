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
    addFavorite: (state, { payload }: PayloadAction<IBookDetails>) => {
      const itemInCart = state.favorite.find((item) => item.isbn13 === payload.isbn13);

      itemInCart || state.favorite.push({ ...payload });
    },

    deleteFavorite: (state, { payload }: PayloadAction<IBookDetails>) => {
      const itemInCart = state.favorite.findIndex((item) => item.isbn13 === payload.isbn13);

      state.favorite.splice(itemInCart, 1);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
