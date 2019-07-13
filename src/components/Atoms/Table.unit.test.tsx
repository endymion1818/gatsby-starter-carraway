import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Table from './Table'

describe('<Table />', () => {
  beforeEach(cleanup)
  it('Should render', () => {
    const { container } = render(<Table />)
    expect(container).toMatchSnapshot()
  })
})
