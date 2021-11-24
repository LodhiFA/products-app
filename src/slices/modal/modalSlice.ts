import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IProductModel } from '../../models/IProductModel'

export interface IModalState {
  show: boolean
  product: IProductModel
}

const initialState: IModalState = {
  show: false,
  product: {
    additional_image_link: '',
    gender: '',
    title: '',
    gtin: '',
    price: '',
    sale_price: '',
    image_link: '',
  },
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<IProductModel>) => {
      state.show = true
      state.product = action.payload
    },
    hideModal: (state) => {
      state.show = false
      state.product = {
        additional_image_link: '',
        gender: '',
        title: '',
        gtin: '',
        price: '',
        sale_price: '',
        image_link: '',
      }
    },
  },
})

export const modal = (state: RootState) => state.modal

export const { showModal, hideModal } = modalSlice.actions

export default modalSlice.reducer
