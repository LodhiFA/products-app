import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { ProductDetail } from '../components/Details/ProductDetail'
import { ProductGrid } from '../components/Grid/ProductGrid'
import { Paging } from '../components/Paging/Paging'
import { Search } from '../components/Search/Search'
import { readCSVData } from '../services/ProductService'
import {
  populateProducts, products,
} from '../redux/slices/product/productSlice'

import styles from './ProductListing.module.css'

export const ProductListing = () => {
  const prods = useAppSelector(products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    readCSVData().then((prod) => {
      dispatch(populateProducts(prod))
    })
  }, [dispatch])

  return (
    <>
      <Row>
        <Col sm={12}>
          <Search />
        </Col>
      </Row>

      <br />

      <Row>
        <Col sm={12}>
          <Paging />
        </Col>
      </Row>

      <br />

      <Row className={styles.productList}>
        <ProductGrid products={prods} />
      </Row>

      <ProductDetail />
    </>
  )
}
