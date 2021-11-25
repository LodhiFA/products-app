import reducer, {
  IProductState,
  populateProducts,
  searchProducts,
} from '../../redux/slices/product/productSlice'
import { testProducts } from '../testData'

describe('Testing product slice/reducers', () => {
  const prevState: IProductState = {
    products: testProducts,
    filtered: testProducts,
    currentPage: testProducts,
    pageInfo: {
      currentPage: 1,
      totalPages: 1,
    },
  }

  it('should populate products', () => {
    const initState: IProductState = {
      products: [],
      filtered: [],
      currentPage: [],
      pageInfo: {
        currentPage: 0,
        totalPages: 0,
      },
    }
    expect(reducer(initState, populateProducts(testProducts)).products).toEqual(
      testProducts
    )
  })

  it('should search products by title', () => {
    expect(
      reducer(
        prevState,
        searchProducts({
          query: 'Product 2',
          gender: '',
          sale: false,
        })
      ).filtered
    ).toEqual([testProducts[1]])
  })

  it('should filter products by gender', () => {
    expect(
      reducer(
        prevState,
        searchProducts({
          query: '',
          gender: 'female',
          sale: false,
        })
      ).filtered
    ).toEqual([testProducts[0]])
  })

  it('should show products on sale', () => {
    expect(
      reducer(
        prevState,
        searchProducts({
          query: '',
          gender: '',
          sale: true,
        })
      ).filtered
    ).toEqual([testProducts[1]])
  })
})
