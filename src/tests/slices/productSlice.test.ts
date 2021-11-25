import { IProductModel } from '../../models/IProductModel'
import reducer, {
  IProductState,
  populateProducts,
  searchProducts,
} from '../../redux/slices/product/productSlice'

const products: IProductModel[] = [
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

describe('Testing product slice/reducers', () => {
  it('should populate products', () => {
    const prevState: IProductState = {
      products: [],
      filtered: [],
      currentPage: [],
      pageInfo: {
        currentPage: 0,
        totalPages: 0,
      },
    }
    expect(reducer(prevState, populateProducts(products)).products).toEqual(
      products
    )
  })

  it('should search products', () => {
    const prevState: IProductState = {
      products: products,
      filtered: products,
      currentPage: products,
      pageInfo: {
        currentPage: 1,
        totalPages: 1,
      },
    }
    expect(reducer(prevState, searchProducts('Product 2')).filtered).toEqual(
      [products[1]]
    )
  })
})
