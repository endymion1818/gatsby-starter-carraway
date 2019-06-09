import styled from 'styled-components'
import * as variable from '../constants'

export interface IContainerProps {
  /**
   * maximum width of container
   * @default variable.EBREAKPOINT.LARGE
   */
  maxWidth?: variable.EBREAKPOINT
}

const Container = styled.div<IContainerProps>`
  max-width: ${({ maxWidth }) => maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${variable.ESIZE.SINGLE};
  padding-right: ${variable.ESIZE.SINGLE};
`

export default Container

Container.defaultProps = {
  maxWidth: variable.EBREAKPOINT.LARGE,
}
