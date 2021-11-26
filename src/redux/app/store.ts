import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import productReducer from '../slices/product/productSlice'
import modalReducer from '../slices/modal/modalSlice'

/* Configuring store with reducers */
export const store = configureStore({
  reducer: {
    product: productReducer,
    modal: modalReducer,
  },
  /* Disabling middleware serialization for dev mode */
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
