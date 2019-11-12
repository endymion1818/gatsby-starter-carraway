import { cleanup, render } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'
import ButtonStyles from './ButtonStyles'

const LooksLikeAButton = styled.a`
  ${ButtonStyles}
`

describe('ButtonStyles styles', () => {
  beforeEach(cleanup)
  it('Should render', () => {
    const { container } = render(<LooksLikeAButton href="https://ind.ie" />)
    expect(container).toMatchSnapshot()
  })
})
