import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Row from './Row'

describe('<Row />', () => {
  beforeEach(cleanup)
  it('Should render', () => {
    const { container } = render(<Row />)
    expect(container).toMatchSnapshot()
  })
})
