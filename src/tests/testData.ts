import { RootState } from '../redux/app/store'
import { IProductModel } from '../models/IProductModel'

export const testProducts: IProductModel[] = [
  {
    title: 'My Product',
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