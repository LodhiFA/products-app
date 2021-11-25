import React from 'react'
import { Modal, Row, Carousel } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks'
import { modal, hideModal } from '../../redux/slices/modal/modalSlice'
import { ProductImage } from '../ProductImage/ProductImage'

import styles from './ProductDetail.module.css'

export const ProductDetail = () => {
  const dispatch = useAppDispatch()
  const details = useAppSelector(modal)

  const handleClose = () => dispatch(hideModal())

  return (
    <>
      <Modal show={details.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item # {details.product.gtin}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Carousel>
              {details.product.additional_image_link
                .split(', ')
                .map((link: string, key: number) => {
                  return (
                    <Carousel.Item key={key}>
                      <ProductImage src={link} className={styles.carouselImg} />
                    </Carousel.Item>
                  )
                })}
            </Carousel>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}
