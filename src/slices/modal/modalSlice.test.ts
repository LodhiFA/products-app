import { IProductModel } from '../../models/IProductModel'
import reducer, { hideModal, IModalState, showModal } from './modalSlice'

const modalVal: IProductModel = {
  title: 'Product 1',
  gtin: '5461518461',
  gender: 'female',
  sale_price: '39.95 EUR',
  price: '39.95 EUR',
  image_link: '',
  additional_image_link: '',
}

const initModal: IModalState = {
  product: {
    additional_image_link: '',
    gender: '',
    title: '',
    gtin: '',
    price: '',
    sale_price: '',
    image_link: '',
  },
  show: false,
}

describe('Testing modal slice/reducers', () => {
  it('should display modal with data', () => {
    expect(reducer(initModal, showModal(modalVal))).toEqual({
      show: true,
      product: modalVal,
    } as IModalState)
  })

  it('should hide modal', () => {
    expect(
      reducer(
        {
          show: true,
          product: modalVal,
        } as IModalState,
        hideModal()
      )
    ).toEqual(initModal)
  })
})
