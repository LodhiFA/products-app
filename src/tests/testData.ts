import { RootState } from '../redux/app/store'
import { IProductModel } from '../models/IProductModel'

/**
 * Sample data for running test cases
 */
export const testProducts: IProductModel[] = [
  {
    title: 'My Product',
    gtin: '5461518461',
    gender: 'female',
    sale_price: '39.95 EUR',
    price: '39.95 EUR',
    image_link:
      'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg',
    additional_image_link:
      'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg',
  },
  {
    title: 'Product 2',
    gtin: '5461518490',
    gender: 'male',
    sale_price: '29.95 EUR',
    price: '35.95 EUR',
    image_link:
      'https://mosaic01.ztat.net/vgs/media/large/DI/15/2L/01/AQ/11/DI152L01A-Q11@10.jpg',
    additional_image_link:
      'https://mosaic01.ztat.net/vgs/media/large/DI/15/2L/01/AQ/11/DI152L01A-Q11@2.2.jpg, https://mosaic01.ztat.net/vgs/media/large/DI/15/2L/01/AQ/11/DI152L01A-Q11@9.jpg, https://mosaic01.ztat.net/vgs/media/large/DI/15/2L/01/AQ/11/DI152L01A-Q11@8.jpg',
  },
]

/**
 * Sample initial state for running test cases
 */
const initialState: RootState = {
  modal: {
    show: false,
    product: {
      additional_image_link: '',
      gender: '',
      title: '',
      gtin: '',
      price: '',
      sale_price: '',
      image_link: '',
    },
  },
  product: {
    products: testProducts,
    filtered: testProducts,
    currentPage: testProducts,
    pageInfo: {
      currentPage: 1,
      totalPages: 1,
    },
  },
}

export default initialState