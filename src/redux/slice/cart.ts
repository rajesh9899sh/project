import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state: any[], action: { payload: any; }) {
            state.push(action.payload);
        },
        remove(state: any[], action: { payload: any; }) {
          const index = state.findIndex(item => item.id === action.payload);
          if (index !== -1) {
              state.splice(index, 1);
          }
      },
      
    },
});

export const { add, remove } = cart.actions;
export default cart.reducer;
