import { screen, fireEvent } from '@testing-library/react'
import { ProductListing } from '../../pages/ProductListing'
import { render } from '../test-utils'
import { testProducts } from '../testData'

/**
 * Unit test for ProductListing component
 */
describe('Product Listing Component', () => {
  beforeEach(() => {
    render(<ProductListing />)
  })

  /**
   * Test to verify if modal is mounted properly
   * We are verifying this by checking if product title is present in DOM
   */
  it('renders the listing component', () => {
    expect(screen.getByText(testProducts[0].title)).toBeInTheDocument()
  })

  /**
   * Test to verify Modal functionality
   */
  it('toggles the modal on click', () => {
    const card = screen.getByTestId(`test-${testProducts[0].gtin}`)
    
    expect(card).toBeInTheDocument()
    
    /**
     * Initially, the modal should be hidden 
     */ 
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()

    fireEvent.click(card)
    expect(
      screen.getByText(`Item # ${testProducts[0].gtin}`)
    ).toBeInTheDocument() 

    /**
     * Checking if modal is visible after click event on Product component
     * This is verified by checking if Close button is present in DOM
     */
    const closeBtn = screen.queryByLabelText('Close')
    expect(closeBtn).toBeInTheDocument()

    /**
     * Checking modal hide functionality on clicking close button
     */
    fireEvent.click(closeBtn as HTMLElement)
    expect(
      screen.queryByText(`Item # ${testProducts[0].gtin}`)
    ).not.toBeInTheDocument()
  })
})
