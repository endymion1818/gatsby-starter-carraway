import styled from 'styled-components'
import { breakpoint } from '../tokens'

export interface IRowProps {
  width: number
  breakWidth?: string
}

const Row = styled.div<IRowProps>`
  @media (min-width: ${({ breakWidth }) => (breakWidth ? breakWidth : breakpoint.medium)}) {
    display: grid;
    grid-template-columns: repeat(${({ width }) => (width ? width : 100)}, 1fr);
    grid-gap: 15px;
  }
  /* IE fallback to float since Grid version is older & likely */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: block !important;

    > * {
      display: block !important;
      float: left;
      width: ${({ width }) => (width <= 1 ? 100 : (width / 10) * 100)}%;

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

export default Row
