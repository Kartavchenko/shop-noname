import { createSlice } from "@reduxjs/toolkit";
import { addToHistoryOrders } from "./dataOperations";

const dataSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
    historyOrders: [{
      items: [
        { name: null, price: null, description: null, image_url: null, category: null }
      ]
    }],
    loadingProducts: false,
  },
  extraReducers: (builder) => {
    builder
      // ---addToHistoryThunk---
      .addCase(addToHistoryOrders.pending, (state) => {
        state.loadingProducts = true;
        state.error = null;
      })
      .addCase(addToHistoryOrders.fulfilled, (state, { payload }) => {
        state.loadingProducts = false;
        state.historyOrders = payload;
      })
      .addCase(addToHistoryOrders.rejected, (state, { payload }) => {
        state.loadingProducts = false;
        state.error = payload;
      });
  },
});

export default dataSlice.reducer;
