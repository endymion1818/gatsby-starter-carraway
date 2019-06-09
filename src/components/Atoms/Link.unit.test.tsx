import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Link from './Link'

describe('<Link />', () => {
  beforeEach(cleanup)
  it('Should render an <a> tag', () => {
    const { container } = render(<Link href="https://deliciousreverie.co.uk">test</Link>)
    expect(container).toMatchSnapshot()
  })
  it('Should render a <span>', () => {
    const { container } = render(<Link>test</Link>)
    expect(container).toMatchSnapshot()
  })
})
