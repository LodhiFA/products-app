import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { ProductDetail } from '../components/Details/ProductDetail'
import { ProductGrid } from '../components/Grid/ProductGrid'
import { Paging } from '../components/Paging/Paging'
import { Search } from '../components/Search/Search'
import { readCSVData } from '../services/ProductService'
import {
  populateProducts,
  products,
} from '../redux/slices/product/productSlice'

import styles from './ProductListing.module.css'

/**
 * Component for rendering product page.
 * 
 * The component calls a service method to fetch data and pass it to redux store.
 * 
 * This component is called by App component.
 */
export const ProductListing = () => {
  const prods = useAppSelector(products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    /* Calling service method to fetch data */
    readCSVData().then((prod) => {
      /* Dispatching fetched data to reducer */
      dispatch(populateProducts(prod))
    })
  }, [dispatch])

  return (
    <>
      <Row style={{ marginTop: '10px' }}>
        <Col sm={12}>
          <h3>Products</h3>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <Search />
        </Col>
      </Row>

      <Row className={styles.productList}>
        <ProductGrid products={prods} />
      </Row>

      <br />

      <Row>
        <Col sm={12}>
          <Paging />
        </Col>
      </Row>

      <ProductDetail />
    </>
  )
}
