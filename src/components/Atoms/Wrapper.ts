import styled from 'styled-components'
import * as token from '../tokens'

export interface IWrapperProps {
  /**
   * background colour
   * @default token.EBACKGROUND_COLOUR.SURFACE
   */
  backgroundColour?: token.EBACKGROUND_COLOUR
  /**
   * text colour
   * @default token.ETEXT_COLOUR.ON_SURFACE
   */
  textColour?: token.ETEXT_COLOUR
  /**
   * padding
   * @default token.ESIZE.SINGLE
   */
  paddingTop?: token.ESIZE
  /**
   * padding
   * @default token.ESIZE.SINGLE
   */
  paddingBottom?: token.ESIZE
}

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  background-color: ${({ backgroundColour }) => backgroundColour};
  color: ${({ textColour }) => textColour};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
`

Wrapper.defaultProps = {
  backgroundColour: token.EBACKGROUND_COLOUR.SURFACE,
  textColour: token.ETEXT_COLOUR.ON_SURFACE,
  paddingTop: token.ESIZE.SINGLE,
  paddingBottom: token.ESIZE.SINGLE,
}

export default Wrapper
