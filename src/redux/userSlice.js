import { createSlice } from "@reduxjs/toolkit";
import { logOutAccount, changeNameAccount } from "./authOperations";

const userSlice = createSlice({
  name: "data",
  initialState: {
    user: {uid: null, email: null, name: null},
    basket: [],
  },
  reducers: {
    userIsLoggedIn: (state, { payload }) => {
      state.user = {
        uid: payload.uid,
        email: payload.email,
        name: payload.displayName
      };
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
      .addCase(logOutAccount.fulfilled, (state) => {
        state.user = {uid: null, email: null, name: null};
        state.basket = [];
      })
      .addCase(changeNameAccount.fulfilled, (state, { payload }) => {
        state.user.name = payload;
      })
  }
});

export const {removeItemFromBasket, cleenBasket, addItemToBasket, userIsLoggedIn} = userSlice.actions;

export default userSlice.reducer;
