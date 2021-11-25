import React, { ChangeEvent, useState, useEffect } from 'react'
import { Form, Card } from 'react-bootstrap'
import { useAppDispatch } from '../../redux/app/hooks'
import { searchProducts } from '../../redux/slices/product/productSlice'

export const Search = () => {
  const dispatch = useAppDispatch()

  const [search, setSearch] = useState('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    dispatch(searchProducts(search))
  }, [search, dispatch])

  return (
    <Card>
      <Card.Body>
        <Card.Title>Search Products</Card.Title>
        <Card.Text as='div'>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicSearch'>
              <Form.Control
                type='text'
                aria-label="search-input"
                placeholder='Search Products'
                value={search}
                onChange={handleSearch}
              />
              <Form.Text className='text-muted'>
                Search the products by title.
              </Form.Text>
            </Form.Group>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
