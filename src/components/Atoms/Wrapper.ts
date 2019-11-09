import styled from 'styled-components'
import * as token from '../tokens'

export interface IWrapperProps {
  backgroundColour?: token.ISemanticColorSpec
  textColour?: token.ISemanticColorSpec
  paddingTop?: token.ISize
  paddingBottom?: token.ISize
}

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  background-color: ${({ backgroundColour }) => backgroundColour};
  color: ${({ textColour }) => textColour};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
`

export default Wrapper
