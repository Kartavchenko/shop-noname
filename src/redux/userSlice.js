import { createSlice } from "@reduxjs/toolkit";
import { loginInAccount, logOutAccount, createAccount, loginWithGoogle } from "./authOperations";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    basket: [],
    isLoading: false,
    error: null,
    isLoggedIn: false,
  },
  reducers: {
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
      .addCase(createAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAccount.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(createAccount.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(loginWithGoogle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(loginInAccount.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginInAccount.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(logOutAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOutAccount.fulfilled, (state) => {
        state.user = null;
        state.token = null;
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

export const {removeItemFromBasket, cleenBasket, addItemToBasket} = userSlice.actions;

export default userSlice.reducer;
