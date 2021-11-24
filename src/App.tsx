import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import { useAppSelector } from './app/hooks'
import { ProductListing } from './pages/ProductListing'
import { products } from './slices/product/productSlice'

function App() {
  const prods = useAppSelector(products)
  return (
    <div className='App'>
      <Container fluid='sm'>
        <Row>
          <Col>
            <ProductListing data={prods} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
