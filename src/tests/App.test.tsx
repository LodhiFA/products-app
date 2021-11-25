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

  it('renders the search component', () => {
    const input = screen.getByLabelText('search-input')
    expect(input).toBeInTheDocument()
  })

  it('renders the products from store', () => {
    const card = screen.getByTestId(`test-${testProducts[1].gtin}`)
    expect(card).toBeInTheDocument()
  })

  it('filters the search results', () => {
    const card = screen.getByTestId(`test-${testProducts[1].gtin}`)
    expect(card).toBeInTheDocument()

    const input = screen.getByLabelText('search-input')
    expect(input).toBeInTheDocument()

    userEvent.type(input, 'My')
    expect(input).toHaveValue('My')

    expect(card).not.toBeInTheDocument()

    expect(
      screen.getByTestId(`test-${testProducts[0].gtin}`)
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
