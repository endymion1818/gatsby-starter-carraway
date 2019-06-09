import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Wrapper from './Wrapper'

describe('<Wrapper />', () => {
  beforeEach(cleanup)
  it('Should render', () => {
    const { container } = render(<Wrapper />)
    expect(container).toMatchSnapshot()
  })
})
