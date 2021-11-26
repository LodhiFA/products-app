import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'
import { render } from './test-utils'
import { testProducts } from './testData'

/**
 * Test suite to replicate user interaction and verify app behaviour
 * The test suite verifies that all the components are rendered correctly and behave in the manner as intended
 */
describe('Testing the app with dummy store', () => {
  beforeEach(() => {
    render(<App />)
  })

  /**
   * Test to verify products from redux store are loaded
   */
  it('renders the products from store', () => {
    expect(
      screen.getByTestId(`test-${testProducts[0].gtin}`)
    ).toBeInTheDocument()
    expect(
      screen.getByTestId(`test-${testProducts[1].gtin}`)
    ).toBeInTheDocument()
  })

  /**
   * Test to verify the search component in present in DOM
   */
  it('renders the search component', () => {
    const input = screen.getByLabelText('search-input')
    expect(input).toBeInTheDocument()
  })

  /**
   * Test to verify search by text functionality
   */
  it('returns products based on search query', () => {
    const input = screen.getByLabelText('search-input')
    expect(input).toBeInTheDocument()

    userEvent.type(input, 'My')
    expect(input).toHaveValue('My')

    /**
     * Since the 2nd product in our test data is named: [Product 2], 
     * it shouldn't be present after our search query
     */
    expect(
      screen.queryByTestId(`test-${testProducts[1].gtin}`)
    ).not.toBeInTheDocument()

    /**
     * Only 1st product from our test data should be present in DOM
     */
    expect(
      screen.queryByTestId(`test-${testProducts[0].gtin}`)
    ).toBeInTheDocument()
  })

  /**
   * Test to verify search by gender dropdown
   */
  it('filters products based on gender', () => {
    const select = screen.getByTestId('test-select')
    expect(select).toBeInTheDocument()

    fireEvent.change(select, { target: { value: 'female' } })
    expect(select).toHaveValue('female')

    /**
     * 2nd product from test data shouldn't be displayed because of our filter
     */
    expect(
      screen.queryByTestId(`test-${testProducts[1].gtin}`)
    ).not.toBeInTheDocument()

    expect(
      screen.queryByTestId(`test-${testProducts[0].gtin}`)
    ).toBeInTheDocument()
  })

  /**
   * Test to verify search by `Sale` checkbox
   */
  it('shows products on sale', () => {
    const checkbox = screen.getByTestId('test-sale') as HTMLInputElement
    expect(checkbox).toBeInTheDocument()

    /**
     * Firing checkbox event and verifying result
     */
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)

    expect(
      screen.queryByTestId(`test-${testProducts[0].gtin}`)
    ).not.toBeInTheDocument()

    expect(
      screen.queryByTestId(`test-${testProducts[1].gtin}`)
    ).toBeInTheDocument()
  })

  /**
   * Test to verify modal toggle functionality
   */
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
