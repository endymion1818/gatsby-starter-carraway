import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Form from './Form'

beforeEach(cleanup)

it('Should render', () => {
  const { container } = render(<Form />)
  expect(container).toMatchSnapshot()
})
