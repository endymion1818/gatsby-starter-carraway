import styled from 'styled-components'

export interface IWrapperProps {
  backgroundColour?: string
  textColour?: string
  paddingTop?: string
  paddingBottom?: string
}

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  background-color: ${({ backgroundColour }) => backgroundColour};
  color: ${({ textColour }) => textColour};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
`

export default Wrapper
