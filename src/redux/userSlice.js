import { createSlice } from "@reduxjs/toolkit";
import { logOutAccount } from "./authOperations";

const userSlice = createSlice({
  name: "data",
  initialState: {
    user: {uid: null, email: null, name: null},
    basket: [],
    isLoading: false,
    error: null,
    isLoggedIn: false,
  },
  reducers: {
    userIsLoggedIn: (state, { payload }) => {
      state.user = {
        uid: payload.uid,
        email: payload.email,
        name: payload.displayName
      };
      state.isLoggedIn = true;
    },
    removeItemFromBasket: (state, { payload }) => {
      state.basket = state.basket.filter(item => item.id !== payload);
    },
    cleenBasket: (state) => {
      state.basket = [];
    },
    addItemToBasket: (state, { payload }) => {
      state.basket = [...state.basket, payload];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logOutAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOutAccount.fulfilled, (state) => {
        state.user = {uid: null, email: null, name: null};
        state.basket = [];
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOutAccount.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
  }
});

export const {removeItemFromBasket, cleenBasket, addItemToBasket, userIsLoggedIn} = userSlice.actions;

export default userSlice.reducer;
