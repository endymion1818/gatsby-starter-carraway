import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Form from './Form'

describe('<Form />', () => {
  beforeEach(cleanup)
  it('Should render', () => {
    const { container } = render(<Form />)
    expect(container).toMatchSnapshot()
  })
  it('should not validate names under 5 charachters', () => {
    const { container } = render(<Form />)
  })
})
