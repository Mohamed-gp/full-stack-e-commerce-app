import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface productsState {
  products: productItem;
}
type productItem = any


const initialState: productsState = {
  products: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setfalse(state, action) {
      state.products = false;
    },
    settrue(state, action) {
      state.products = true;
    },
  },
});

const productsReducer = productsSlice.reducer;
const productsAction = productsSlice.actions;
export { productsAction, productsReducer };
