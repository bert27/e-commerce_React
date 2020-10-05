import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Cart from '../Pages/Cart/Cart'
import '@testing-library/jest-dom'
import "@testing-library/jest-dom/extend-expect"

describe('Render layout about cart page', () => {
  it('This layout should have two returns,' +
  'one will render if not have product in list, and other need to return when you have products in list ', () => {
    const { getByTestId } = render(<BrowserRouter><Cart /></BrowserRouter>)

    const ancestor = getByTestId('Container')
    const descendant = getByTestId('without_product')


    expect(ancestor).toContainElement(descendant)
  //  expect(ancestor).toContainElement(getByTestId('with_product'))
  })
})
