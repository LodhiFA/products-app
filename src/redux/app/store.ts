import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import productReducer from '../slices/product/productSlice'
import modalReducer from '../slices/modal/modalSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
