import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import { IProductModel } from '../../models/IProductModel'
import { Product } from '../../components/Product/Product'

const product: IProductModel = {
  title: 'Product 1',
  gtin: '5461518461',
  gender: 'female',
  sale_price: '39.95 EUR',
  price: '39.95 EUR',
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

describe('Product component', () => {
  it('renders the product component', () => {
    productComponent()
    expect(screen.getByText(`Price: ${product.price}`)).toBeInTheDocument()
  })

  it('displays product details in modal', () => {
    productComponent()

    const modalText = screen.queryByText(`Item # ${product.gtin}`)
    expect(modalText).toBeNull()

    const card = screen.getByTestId(`test-${product.gtin}`)
    expect(card).toBeInTheDocument()
  })
})
