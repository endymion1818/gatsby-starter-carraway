import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Column from './Column'

describe('<Column />', () => {
  beforeEach(cleanup)
  it('Should render', () => {
    const { container } = render(<Column />)
    expect(container).toMatchSnapshot()
  })
})
