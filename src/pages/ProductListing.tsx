import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useAppDispatch } from '../app/hooks'
import { ProductDetail } from '../components/Details/ProductDetail'
import { ProductGrid } from '../components/Grid/ProductGrid'
import { Paging } from '../components/Paging/Paging'
import { Search } from '../components/Search/Search'
import { IProductModel } from '../models/IProductModel'
import { readCSVData } from '../services/ProductService'
import {
  populateProducts,
} from '../slices/product/productSlice'

import styles from './ProductListing.module.css'

interface IListingProps {
  data: IProductModel[]
}

export const ProductListing = (props: IListingProps) => {
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
        <ProductGrid products={props.data} />
      </Row>

      <ProductDetail />
    </>
  )
}
