import styled from 'styled-components'
import * as token from '../tokens'

export interface IContainerProps {
  /**
   * maximum width of container
   * @default token.EBREAKPOINT.LARGE
   */
  maxWidth?: token.EBREAKPOINT
}

const Container = styled.div<IContainerProps>`
  max-width: ${({ maxWidth }) => maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${token.ESIZE.SINGLE};
  padding-right: ${token.ESIZE.SINGLE};
`

export default Container

Container.defaultProps = {
  maxWidth: token.EBREAKPOINT.LARGE,
}
