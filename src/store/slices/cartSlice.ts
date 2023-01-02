import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetails } from "types";

interface ICart {
  cart: IBookDetails[];
  amount: number;
}

const initialState: ICart = {
  cart: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: "cartBooks",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBookDetails>) => {
      const itemInCart = state.cart.find((item) => item.isbn13 === action.payload.isbn13);

      if (itemInCart) {
        state.amount++;
      }

      if (!itemInCart) {
        state.cart.push({
          ...action.payload,
        });
      }
    },

    deleteBook: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((book) => {
        return book.isbn13 !== action.payload;
      });
    },

    incAmount: (state, action: PayloadAction<string>) => {
      const book = state.cart.find((book) => book.isbn13 === action.payload);

      if (book) {
        state.amount++;
      }
    },

    decAmount: (state, action: PayloadAction<string>) => {
      const book = state.cart.find((book) => book.isbn13 === action.payload);

      if (book) {
        state.amount--;
      }
    },
  },
});

export const { addBook, deleteBook, incAmount, decAmount } = cartSlice.actions;

export default cartSlice.reducer;
