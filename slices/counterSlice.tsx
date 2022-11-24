import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  cart: number;
  wishlist: number;
}

const initialState: CounterState = {
  cart: 0,
  wishlist: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementAddCart: (state) => {
      state.cart += 1;
    },
    decrementAddCart: (state) => {
      state.cart -= 1;
    },
    incrementWishList: (state) => {
      state.wishlist += 1;
    },
    decrementWishList: (state) => {
      state.wishlist -= 1;
    },
  },
});


export const { incrementAddCart, decrementAddCart, incrementWishList,decrementWishList } = counterSlice.actions;

export default counterSlice.reducer;
