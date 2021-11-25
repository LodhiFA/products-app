import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IFilterModel, IProductModel } from '../../../models/IProductModel'

export interface IProductState {
  products: IProductModel[]
  filtered: IProductModel[]
  currentPage: IProductModel[]
  pageInfo: IPageState
}

interface IPageState {
  currentPage: number
  totalPages: number
}

const initialState: IProductState = {
  products: [],
  filtered: [],
  currentPage: [],
  pageInfo: {
    currentPage: 0,
    totalPages: 0,
  },
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    populateProducts: (state, action: PayloadAction<IProductModel[]>) => {
      state.products = action.payload
      state.filtered = action.payload
      state.currentPage = action.payload.slice(0, 100)
      state.pageInfo = {
        currentPage: 1,
        totalPages: action.payload.length / 100,
      }
    },
    searchProducts: (state, action: PayloadAction<IFilterModel>) => {
      const query: string = action.payload.query
      const gender: string = action.payload.gender
      const sale: boolean = action.payload.sale

      state.filtered = state.products
        .filter((p) =>
          isNaN(+query)
            ? p.title.toLowerCase().includes(query.toLowerCase())
            : p.gtin.toLowerCase().includes(query)
        )
        .filter((f) =>
          gender !== undefined && gender.length > 0
            ? f.gender.toLowerCase() === gender
            : true
        )
        .filter((s) =>
          sale ? parseFloat(s.sale_price) < parseFloat(s.price) : true
        )

      state.currentPage =
        state.filtered.length > 100
          ? state.filtered.slice(0, 100)
          : state.filtered

      state.pageInfo = {
        totalPages:
          state.filtered.length > 100
            ? state.filtered.length % 100 === 0
              ? state.filtered.length / 100
              : Math.floor(state.filtered.length / 100) + 1
            : state.filtered.length,
        currentPage: 1,
      }
    },
    changePage: (state, action: PayloadAction<number>) => {
      let pageNum = action.payload
      state.pageInfo.currentPage = action.payload
      state.currentPage = state.filtered.slice(
        (pageNum - 1) * 100,
        (pageNum - 1) * 100 + 100
      )
    },
  },
})

export const { populateProducts, searchProducts, changePage } =
  productSlice.actions

export const products = (state: RootState) => state.product.currentPage
export const pages = (state: RootState) => state.product.pageInfo

export default productSlice.reducer
