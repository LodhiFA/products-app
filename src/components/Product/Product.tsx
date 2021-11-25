import React from 'react'
import { Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useAppDispatch } from '../../redux/app/hooks'
import { IProductModel } from '../../models/IProductModel'
import { showModal } from '../../redux/slices/modal/modalSlice'
import { capitalize } from '../../utilities/Utility'
import styles from './Product.module.css'
import { ProductImage } from '../ProductImage/ProductImage'

interface IProductProps {
  product: IProductModel
}

export const Product = (props: IProductProps) => {
  const dispatch = useAppDispatch()

  const handleClick = (e: React.MouseEvent<HTMLElement>) =>
    dispatch(showModal(props.product))

  return (
    <Col sm={3} className={styles.product}>
      <Card
        className={styles.productCard}
        data-testid={'test-' + props.product.gtin}
        onClick={handleClick}>
        <ProductImage
          src={props.product.image_link}
          className='card-img-top'
          alt={`${props.product.title}`}
        />
        <Card.Body className={styles.productBody}>
          <Card.Title className={styles.productTitle}>
            {props.product.title}
          </Card.Title>
          <Card.Text>
            <i>{capitalize(props.product.gender)}</i>
            <br />
            {props.product.gtin}
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>Sale Price: {props.product.sale_price}</ListGroupItem>
          <ListGroupItem>Price: {props.product.price}</ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  )
}
