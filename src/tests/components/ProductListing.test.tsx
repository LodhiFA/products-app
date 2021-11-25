import { screen, fireEvent } from '@testing-library/react'
import { ProductListing } from '../../pages/ProductListing'
import { render } from '../test-utils'
import { testProducts } from '../testData'

describe('Product Listing Component', () => {
  beforeEach(() => {
    render(<ProductListing />)
  })

  it('renders the listing component', () => {
    expect(screen.getByText(testProducts[0].title)).toBeInTheDocument()
  })

  it('toggles the modal on click', () => {
    const card = screen.getByTestId(`test-${testProducts[0].gtin}`)
    
    expect(card).toBeInTheDocument()
    
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()

    fireEvent.click(card)
    expect(
      screen.getByText(`Item # ${testProducts[0].gtin}`)
    ).toBeInTheDocument() 

    const closeBtn = screen.queryByLabelText('Close')
    expect(closeBtn).toBeInTheDocument()

    fireEvent.click(closeBtn as HTMLElement)
    expect(
      screen.queryByText(`Item # ${testProducts[0].gtin}`)
    ).not.toBeInTheDocument()
  })
})
