import styled from 'styled-components'
import * as token from '../tokens'

export interface IRowProps {
  /**
   * how many rows
   * @default 1
   */
  size: number
  /**
   * breakpoint
   *  @default token.EBREAKPOINT.LARGE
   */

  breakpoint?: token.EBREAKPOINT
}

const Row = styled.div<IRowProps>`
  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    display: grid;
    grid-template-columns: repeat(${({ size }) => (size ? size : 100)}, 1fr);
    grid-gap: 15px;
  }
  /* IE fallback to float since Grid version is older & likely */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: block !important;

    > * {
      display: block !important;
      float: left;
      width: ${({ size }) => (size <= 1 ? 100 : (size / 10) * 100)}%;

      &:not(:first-child) {
        margin-left: 1rem;
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
    /* clear floats */
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
`

Row.defaultProps = {
  size: 1,
  breakpoint: token.EBREAKPOINT.LARGE,
}

export default Row
