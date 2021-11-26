import { IProductModel } from '../../models/IProductModel'
import reducer, { hideModal, IModalState, showModal } from '../../redux/slices/modal/modalSlice'

/* Sample product data */
const modalVal: IProductModel = {
  title: 'Product 1',
  gtin: '5461518461',
  gender: 'female',
  sale_price: '39.95 EUR',
  price: '39.95 EUR',
  image_link: '',
  additional_image_link: '',
}

/* Sample initial state */
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

/**
 * Unit test for modal slice
 */
describe('Testing modal slice/reducers', () => {
  /**
   * Test to verify showModal reducer
   */
  it('should display modal with data', () => {
    expect(reducer(initModal, showModal(modalVal))).toEqual({
      show: true,
      product: modalVal,
    } as IModalState)
  })

  /**
   * Test to verify hideModal reducer
   */
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
