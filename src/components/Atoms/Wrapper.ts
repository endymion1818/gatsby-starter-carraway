import styled from 'styled-components'
import * as variable from '../constants'

export interface IWrapperProps {
  /**
   * background colour
   * @default variable.EBACKGROUND_COLOUR.SURFACE
   */
  backgroundColour?: variable.EBACKGROUND_COLOUR
  /**
   * text colour
   * @default variable.ETEXT_COLOUR.ON_SURFACE
   */
  textColour?: variable.ETEXT_COLOUR
  /**
   * padding
   * @default variable.ESIZE.SINGLE
   */
  paddingTop?: variable.ESIZE
  /**
   * padding
   * @default variable.ESIZE.SINGLE
   */
  paddingBottom?: variable.ESIZE
}

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  background-color: ${({ backgroundColour }) => backgroundColour};
  color: ${({ textColour }) => textColour};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
`

Wrapper.defaultProps = {
  backgroundColour: variable.EBACKGROUND_COLOUR.SURFACE,
  textColour: variable.ETEXT_COLOUR.ON_SURFACE,
  paddingTop: variable.ESIZE.SINGLE,
  paddingBottom: variable.ESIZE.SINGLE,
}

export default Wrapper
