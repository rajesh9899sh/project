import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/cart";
import productSlice from "./slice/productSlice";

export const store=  configureStore({
    reducer: {
        cart: CartSlice,
        product: productSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;