import reducer, {
  IProductState,
  populateProducts,
  searchProducts,
} from '../../redux/slices/product/productSlice'
import { testProducts } from '../testData'

/* Sample state for testing purpose */
const prevState: IProductState = {
  products: testProducts,
  filtered: testProducts,
  currentPage: testProducts,
  pageInfo: {
    currentPage: 1,
    totalPages: 1,
  },
}

/**
 * Unit test for product slice
 */
describe('Testing product slice/reducers', () => {

  /**
   * Test to verify populate product reducer
   */
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

  /**
   * Test to filter product by input
   */
  it('should filter products by title', () => {
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

  /**
   * Test to filter product by gender
   */
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

  /**
   * Test to filter product by sale checkbox
   */
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
