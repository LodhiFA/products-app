import { screen, fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import { IProductModel } from '../../models/IProductModel'
import { ProductListing } from '../../pages/ProductListing'

const testProducts: IProductModel[] = [
  {
    title: 'Product 1',
    gtin: '5461518461',
    gender: 'female',
    sale_price: '39.95 EUR',
    price: '39.95 EUR',
    image_link: '',
    additional_image_link: '',
  },
  {
    title: 'Product 2',
    gtin: '5461518490',
    gender: 'male',
    sale_price: '29.95 EUR',
    price: '35.95 EUR',
    image_link: '',
    additional_image_link: '',
  },
]

describe('Product Listing Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ProductListing data={testProducts} />
      </Provider>
    )
  })

  it('renders the listing component', () => {
    expect(screen.getByText('5461518490')).toBeInTheDocument()

    const card = screen.getByTestId(`test-5461518490`)
    expect(card).toBeInTheDocument()

    fireEvent.click(card)
    expect(screen.getByText('Item # 5461518490')).toBeInTheDocument()
  })
})
