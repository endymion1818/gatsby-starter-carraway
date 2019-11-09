import styled from 'styled-components'
import * as token from '../tokens'

export interface IContainerProps {
  maxWidth?: token.IBreakpoint
}

const Container = styled.div<IContainerProps>`
  max-width: ${({ maxWidth }) => maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${token.size.single};
  padding-right: ${token.size.single};
`

export default Container

Container.defaultProps = {
  maxWidth: token.breakpoint.medium,
}
