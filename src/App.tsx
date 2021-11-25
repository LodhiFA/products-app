import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ProductListing } from './pages/ProductListing'

function App() {
  return (
    <div className='App'>
      <Container fluid='sm'>
        <Row>
          <Col>
            <ProductListing />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
