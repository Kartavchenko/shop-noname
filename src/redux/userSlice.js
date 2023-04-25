import { createSlice } from "@reduxjs/toolkit";
import { logOutAccount, loginWithGoogle } from "./authOperations";

const userSlice = createSlice({
  name: "data",
  initialState: {
    user: {uid: null, email: null, name: null},
    basket: [],
    loading: false,
    error: null
  },
  reducers: {
    userIsLoggedIn: (state, { payload }) => {
      state.user = {
        uid: payload.uid,
        email: payload.email,
        name: payload.displayName
      };
    },
    setStatus: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
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
      // ---loginAccount---
      // .addCase(loginAccount.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(loginAccount.fulfilled, (state, { payload }) => {
      //   state.loading = false;
      //   state.user = {
      //     uid: payload.uid,
      //     email: payload.email,
      //     name: payload.displayName
      //   };
      // })
      // .addCase(loginAccount.rejected, (state, {payload}) => {
      //   state.loading = false;
      //   state.error = payload;
      // })
      // ---registerAccount---
      // .addCase(registerAccount.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(registerAccount.fulfilled, (state, { payload }) => {
      //   state.loading = false;
      //   state.user = {
      //     uid: payload.uid,
      //     email: payload.email,
      //     name: payload.displayName
      //   };
      // })
      // .addCase(registerAccount.rejected, (state, {payload}) => {
      //   state.loading = false;
      //   state.error = payload;
      // })
      // ---loginWithGoogle---
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = {
          uid: payload.uid,
          email: payload.email,
          name: payload.displayName
        };
      })
      .addCase(loginWithGoogle.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      })
      // ---changeNameAccount---
      // .addCase(changeNameAccount.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(changeNameAccount.fulfilled, (state, { payload }) => {
      //   state.user.name = payload;
      // })
      // .addCase(changeNameAccount.rejected, (state, {payload}) => {
      //   state.loading = false;
      //   state.error = payload;
      // })
      // ---logOutAccount---
      .addCase(logOutAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOutAccount.fulfilled, (state) => {
        state.user = {uid: null, email: null, name: null};
        state.basket = [];
        state.error = null;
      })
  }
});

export const {
  removeItemFromBasket,
  cleenBasket,
  addItemToBasket,
  userIsLoggedIn,
  setStatus,
  setError
} = userSlice.actions;

export default userSlice.reducer;
