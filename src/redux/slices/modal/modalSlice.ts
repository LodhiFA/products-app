import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IProductModel } from '../../../models/IProductModel'

/* Typescript model for modal state */
export interface IModalState {
  show: boolean
  product: IProductModel
}

/* Initial state */
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
    /* Reducer to show modal */
    showModal: (state, action: PayloadAction<IProductModel>) => {
      state.show = true
      state.product = action.payload
    },
    /* Reducer to hide modal */
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

/* Exporting modal state */
export const modal = (state: RootState) => state.modal

/* Exporting modal actions */
export const { showModal, hideModal } = modalSlice.actions

export default modalSlice.reducer
