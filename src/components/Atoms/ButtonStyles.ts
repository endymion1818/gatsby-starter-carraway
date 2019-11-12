import { css } from 'styled-components'
import { borderradius, colors, size } from '../tokens'

const ButtonStyles = css`
  display: inline-block;
  border: none;
  padding: ${size.single} ${size.double};
  margin: 0;
  text-decoration: none;
  background: ${colors.neutral.medium};
  color: ${colors.base.primary};
  font-size: ${size.single};
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: ${borderradius.medium};

  &:hover,
  &:focus {
    background: ${colors.neutral.medium};
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
export default ButtonStyles
