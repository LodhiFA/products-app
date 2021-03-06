import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../redux/app/store'
import { IProductModel } from '../../models/IProductModel'
import { Product } from '../../components/Product/Product'

/* Sample data for testing purpose */
const product: IProductModel = {
  title: 'Product 1',
  gtin: '5461518461',
  gender: 'female',
  sale_price: '39.95 EUR',
  price: '29.95 EUR',
  image_link: '',
  additional_image_link: '',
}

const productComponent = () => {
  render(
    <Provider store={store}>
      <Product product={product} />
    </Provider>
  )
}

/**
 * Unit Test for Product component
 */
describe('Product component', () => {
  beforeEach(() => productComponent())
  /**
   * Test to verify if all fields with values are present in the dom
   */
  it('renders the product component', () => {
    expect(screen.getByText(`${product.title}`)).toBeInTheDocument()
    expect(screen.getByText(`${product.gtin}`)).toBeInTheDocument()
    expect(screen.getByText(`Price: ${product.price}`)).toBeInTheDocument()
    expect(
      screen.getByText(`Sale Price: ${product.sale_price}`)
    ).toBeInTheDocument()
  })
})
