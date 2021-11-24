import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { IProductModel } from '../../models/IProductModel'
import { Product } from '../Product/Product'

interface IProductGridProps {
  products: IProductModel[]
}

export const ProductGrid = (props: IProductGridProps) => {
  const rows = [...Array(Math.ceil(props.products.length / 4))]

  const productRows = rows.map((row, key) =>
    props.products.slice(key * 4, key * 4 + 4)
  )

  const content = productRows.map((row, idx) => (
    <Row key={idx}>
      {row.map((product, key) => (
        <Product product={product} key={key} />
      ))}
    </Row>
  ))
  return <Col sm={12}>{content}</Col>
}
