import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'
import { render } from './test-utils'
import { testProducts } from './testData'

describe('Testing the app with dummy store', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('renders the products from store', () => {
    expect(
      screen.getByTestId(`test-${testProducts[0].gtin}`)
    ).toBeInTheDocument()
    expect(
      screen.getByTestId(`test-${testProducts[1].gtin}`)
    ).toBeInTheDocument()
  })

  it('renders the search component', () => {
    const input = screen.getByLabelText('search-input')
    expect(input).toBeInTheDocument()
  })

  it('returns products based on search query', () => {
    const input = screen.getByLabelText('search-input')
    expect(input).toBeInTheDocument()

    userEvent.type(input, 'My')
    expect(input).toHaveValue('My')

    expect(
      screen.queryByTestId(`test-${testProducts[1].gtin}`)
    ).not.toBeInTheDocument()

    expect(
      screen.queryByTestId(`test-${testProducts[0].gtin}`)
    ).toBeInTheDocument()
  })

  it('filters products based on gender', () => {
    const select = screen.getByTestId('test-select')
    expect(select).toBeInTheDocument()

    fireEvent.change(select, { target: { value: 'female' } })
    expect(select).toHaveValue('female')

    expect(
      screen.queryByTestId(`test-${testProducts[1].gtin}`)
    ).not.toBeInTheDocument()

    expect(
      screen.queryByTestId(`test-${testProducts[0].gtin}`)
    ).toBeInTheDocument()
  })

  it('shows products on sale', () => {
    const checkbox = screen.getByTestId('test-sale') as HTMLInputElement
    expect(checkbox).toBeInTheDocument()

    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)

    expect(
      screen.queryByTestId(`test-${testProducts[0].gtin}`)
    ).not.toBeInTheDocument()

    expect(
      screen.queryByTestId(`test-${testProducts[1].gtin}`)
    ).toBeInTheDocument()
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
