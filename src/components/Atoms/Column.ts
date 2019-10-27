import styled from 'styled-components'
import * as token from '../tokens'

export interface IColumnProps {
  /**
   * alignment along vertical axis
   */
  verticalAlign?: token.IFlexalign
  /**
   * gap above top of item
   */
  bufferTop?: token.ISize
  /**
   * gap below bottom of item
   */
  bufferBottom?: token.ISize
  /**
   * text alignment
   */
  textAlign?: token.ITextalign
}

const Column = styled.div<IColumnProps>`
    display: flex;
    flex-direction: column;

    align-self: ${({ verticalAlign }) => verticalAlign};

    ${({ bufferTop }) => bufferTop && `margin-top: ${bufferTop};`}
    ${({ bufferBottom }) => bufferBottom && `margin-bottom: ${bufferBottom};`}

    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}

    > h1,
    > h2,
    > h3,
    > h4,
    > h5,
    > h6 {
        flex: 1;
    }
    > p {
        flex: 2;

        & ~ div[class*='Button'] {
        flex: 0;
        }
    }
    > img {
        width: 100%;
    }
`

export default Column
