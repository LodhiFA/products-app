import React, { ChangeEvent, useState, useEffect } from 'react'
import { Form, Card, Row, Col, FloatingLabel } from 'react-bootstrap'
import { IFilterModel } from '../../models/IProductModel'
import { useAppDispatch } from '../../redux/app/hooks'
import { searchProducts } from '../../redux/slices/product/productSlice'

import styles from './Search.module.css'

/**
 * Component for rendering search form.
 *
 * The component dispatches the call to redux store based on input parameters.
 */
export const Search = () => {
  const dispatch = useAppDispatch()

  const [search, setSearch] = useState({
    query: '',
    gender: '',
    sale: false,
  } as IFilterModel)

  /* On Change handler for form fields */
  const handleChange = (e: ChangeEvent<HTMLElement>) => {
    const elem = e.target as HTMLInputElement
    setSearch({
      ...search,
      [elem.name]: elem.name === 'sale' ? elem.checked : elem.value,
    })
  }

  useEffect(() => {
    /* Dispatching to reducer whenever form field changes */
    dispatch(searchProducts(search))
  }, [search, dispatch])

  return (
    <Card>
      <Card.Body className={styles.searchCard}>
        <Card.Title></Card.Title>
        <Card.Text as='div'>
          <Form>
            <Form.Group as={Row} controlId='formBasicSearch'>
              <Col sm={8}>
                <FloatingLabel
                  controlId='searchProducts'
                  label='Search Products'>
                  <Form.Control
                    type='text'
                    aria-label='search-input'
                    placeholder='Search Products'
                    name='query'
                    value={search.query}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <Form.Check
                  className={styles.checkbox}
                  id='onsale'
                  name='sale'
                  data-testid='test-sale'
                  label='On Sale'
                  type='checkbox'
                  checked={search.sale}
                  onChange={handleChange}
                />
              </Col>
              <Col sm={4}>
                <FloatingLabel
                  controlId='selectGender'
                  label='Filter by Gender'>
                  <Form.Select
                    aria-label='Filter by Gender'
                    name='gender'
                    data-testid='test-select'
                    value={search.gender}
                    onChange={handleChange}>
                    <option hidden>Select Gender</option>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                    <option value='unisex'>Unisex</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Form.Group>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
