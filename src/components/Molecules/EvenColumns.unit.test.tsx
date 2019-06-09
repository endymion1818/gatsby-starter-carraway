import { cleanup, render } from '@testing-library/react'
import React from 'react'
import EvenColumns, { IEvenColumnsProps } from './EvenColumns'

const defaultProps = {
  content: [
    {
      innerContent: <div>test</div>,
    },
  ],
  index: 0,
  textAlign: 'left',
  bufferTop: '0rem',
  bufferBottom: '0rem',
  verticalAlign: 'top',
}

describe('<EvenColumns />', () => {
  beforeEach(cleanup)
  it('Should render', () => {
    const { container } = render(<EvenColumns {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })
})
