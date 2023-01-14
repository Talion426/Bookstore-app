import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "types";

interface ICart {
  cart: ICartItem[];
  totalPrice: number;
}

const initialState: ICart = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartBooks",
  initialState,
  reducers: {
    addBook: (state, { payload }: PayloadAction<ICartItem>) => {
      const itemInCart = state.cart.find((item) => item.isbn13 === payload.isbn13);

      if (itemInCart) {
        itemInCart.summary++;
      }

      if (!itemInCart) {
        state.cart.push({
          ...payload,
          summary: 1,
        });
      }
    },

    deleteBook: (state, { payload }: PayloadAction<ICartItem>) => {
      const itemInCart = state.cart.findIndex((item) => item.isbn13 === payload.isbn13);

      state.cart.splice(itemInCart, 1);
    },

    incAmount: (state, { payload }: PayloadAction<string>) => {
      const itemInCart = state.cart.find((book) => book.isbn13 === payload);

      if (itemInCart) {
        itemInCart.summary++;
      }
    },

    decAmount: (state, { payload }: PayloadAction<string>) => {
      const itemInCart = state.cart.find((book) => book.isbn13 === payload);

      if (itemInCart) {
        itemInCart.summary--;
      }
    },

    getBooksTotalPrice: (state) => {
      const getTotalPrice = (totalPrice = 0) => {
        state.cart.forEach((book) => {
          totalPrice += book.summary * parseFloat(book.price.replace(/[$]/gi, ""));
        });

        state.totalPrice = totalPrice;
      };

      getTotalPrice();
    },
  },
});

export const { addBook, deleteBook, incAmount, decAmount, getBooksTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
