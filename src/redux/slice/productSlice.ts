import {  createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchProduct } from "../thunk";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});


const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, () => {
        console.log("Loading....")
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProduct.rejected, () => {
        console.log("Failed to load data...")
      });
  },
});

export const { setProducts, setStatus }:any = productSlice.actions;
export default productSlice.reducer;

