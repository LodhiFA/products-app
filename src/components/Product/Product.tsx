import React from 'react'
import { Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { IProductModel } from '../../models/IProductModel'
import { capitalize } from '../../utilities/Utility'
import styles from './Product.module.css'

interface IProductProps {
  product: IProductModel
}

export const Product = (props: IProductProps) => {
  return (
    <Col sm={3} className={styles.product}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={props.product.image_link} />
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>
            <strong>{capitalize(props.product.gender)}</strong>
            <br />
            {props.product.gtin}
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>Price: {props.product.price}</ListGroupItem>
          <ListGroupItem>Sale Price: {props.product.sale_price}</ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  )
}
