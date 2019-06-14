import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Navigation from './Navigation'

const defaultProps = {
  navitems: [
    {
      title: 'test',
      url: 'some-url',
      navOrder: 1,
    },
  ],
}

describe('<Navigation />', () => {
  beforeEach(cleanup)
  it('Should render', () => {
    const { container } = render(<Navigation {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })
})
