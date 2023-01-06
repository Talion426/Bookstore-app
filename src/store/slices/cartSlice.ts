import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "types";

interface ICart {
  cart: ICartItem[];
  amount: number;
  totalPrice: number;
}

const initialState: ICart = {
  cart: [],
  amount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartBooks",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<ICartItem>) => {
      const itemInCart = state.cart.find((item) => item.isbn13 === action.payload.isbn13);

      if (itemInCart) {
        state.amount++;
        itemInCart.summary++;
      }

      if (!itemInCart) {
        state.cart.push({
          ...action.payload,
          summary: 1,
        });
      }
    },

    deleteBook: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((itemInCart) => {
        return itemInCart.isbn13 !== action.payload;
      });
    },

    incAmount: (state, action: PayloadAction<string>) => {
      const itemInCart = state.cart.find((book) => book.isbn13 === action.payload);

      if (itemInCart) {
        state.amount++;
        itemInCart.summary++;
      }
    },

    decAmount: (state, action: PayloadAction<string>) => {
      const itemInCart = state.cart.find((book) => book.isbn13 === action.payload);

      if (itemInCart) {
        state.amount--;
        itemInCart.summary--;
      }
    },

    getBooksTotalPrice: (state) => {
      const getTotalPrice = (totalPrice = 0, amount = 0) => {
        state.cart.forEach((itemInCart) => {
          amount += itemInCart.summary;
          totalPrice += itemInCart.summary * parseFloat(itemInCart.price.replace(/[$]/gi, ""));
        });
        state.totalPrice = totalPrice;
        state.amount = amount;
      };
      getTotalPrice();
    },
  },
});

export const { addBook, deleteBook, incAmount, decAmount, getBooksTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
