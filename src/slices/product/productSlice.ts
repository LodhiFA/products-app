import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IProductModel } from '../../models/IProductModel'

export interface IProductState {
  products: IProductModel[]
  filtered: IProductModel[]
}

const initialState: IProductState = {
  products: [],
  filtered: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    populateProducts: (state, action: PayloadAction<IProductModel[]>) => {
      state.products = action.payload
      state.filtered = action.payload.slice(0, 100)
    },
  },
})

export const { populateProducts } = productSlice.actions

export const filteredProducts = (state: RootState) => state.product.filtered

export default productSlice.reducer