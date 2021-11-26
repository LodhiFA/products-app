import React from 'react'
import { Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useAppDispatch } from '../../redux/app/hooks'
import { IProductModel } from '../../models/IProductModel'
import { showModal } from '../../redux/slices/modal/modalSlice'
import { capitalize } from '../../utilities/Utility'
import styles from './Product.module.css'
import { ProductImage } from '../ProductImage/ProductImage'

interface IProductProps {
  /** Expects an object of Product model */
  product: IProductModel
}

/**
 * Component to render product card.
 *
 * The component accepts Product model as props and renders bootstrap card based layout.
 */
export const Product = (props: IProductProps) => {
  const dispatch = useAppDispatch()

  /* Dispatching call to reducer to show Modal */
  const handleClick = (e: React.MouseEvent<HTMLElement>) =>
    props.product.additional_image_link.length > 0
      ? dispatch(showModal(props.product))
      : {}

  return (
    <Col sm={3} className={styles.product}>
      <Card
        className={`${styles.productCard} ${
          props.product.additional_image_link.length > 0 ? styles.clickable : ''
        }`}
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
        <ListGroup className={'list-group-flush ' + styles.priceList}>
          <ListGroupItem>Sale Price: {props.product.sale_price}</ListGroupItem>
          <ListGroupItem>Price: {props.product.price}</ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  )
}
