import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface productsState {
  products : any[]
}

const initialState: productsState = {
  products: [1,2,3,4],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
})


const productsReducer = productsSlice.reducer
const productsAction = productsSlice.actions
export {productsAction,productsReducer}