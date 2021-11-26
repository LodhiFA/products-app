// src/styleguide/Wrapper.js
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/slices/product/productSlice'
import modalReducer from '../redux/slices/modal/modalSlice'
import initialState from '../tests/testData'

/**
 * Wrapper component for rendering our components in react styleguided documentation
 */
const store = configureStore({
  reducer: {
    product: productReducer,
    modal: modalReducer,
  },
  preloadedState: initialState,
})

export default class Wrapper extends Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}
