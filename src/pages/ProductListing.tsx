import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { ProductGrid } from '../components/Grid/ProductGrid'
import { readCSVData } from '../services/ProductService'
import {
  filteredProducts,
  populateProducts,
} from '../slices/product/productSlice'

export const ProductListing = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(filteredProducts)

  useEffect(() => {
    readCSVData().then((prod) => {
      dispatch(populateProducts(prod))
    })
  }, [dispatch])

  return (
    <>
    </>
  )
}
