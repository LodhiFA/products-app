import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { RootState } from '../redux/app/store'

import productReducer from '../redux/slices/product/productSlice'
import modalReducer from '../redux/slices/modal/modalSlice'

import initialState from './testData'

/* Custom typing for our test render component */
type ReduxRenderOptions = {
  preloadedState?: RootState
  store?: EnhancedStore // for redux-toolkit
  renderOptions?: Omit<RenderOptions, 'wrapper'>
}

/**
 * Returns custom render component
 * The component is used in our test suite and use sample data as redux store data
 */
const customRender = (
  ui: ReactElement,
  {
    preloadedState = initialState,
    store = configureStore({
      reducer: {
        product: productReducer,
        modal: modalReducer,
      },
      preloadedState: initialState
    }),
    ...renderOptions
  }: ReduxRenderOptions = {}
) => {
  /* All necessary providers for rendering components */
  const AllTheProviders = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  )

  return rtlRender(ui, {
    wrapper: AllTheProviders,
    ...renderOptions,
  })
}

/* Re-export everything from testing-library */
export * from '@testing-library/react'

/* Override render from testing-library with custom render */
export { customRender as render }
