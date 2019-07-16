import styled from 'styled-components'
import * as token from '../tokens'

export interface IColumnProps {
  /**
   * alignment along vertical axis
   * @default token.EFLEXALIGN.CENTER
   */
  verticalAlign?: token.EFLEXALIGN
  /**
   * gap above top of item
   * @default token.ESIZE.ZERO
   */
  bufferTop?: token.ESIZE
  /**
   * gap below bottom of item
   * @default token.ESIZE.ZERO
   */
  bufferBottom?: token.ESIZE
  /**
   * text alignment
   * @default token.ETEXTALIGN.LEFT
   */
  textAlign?: token.ETEXTALIGN
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

Column.defaultProps = {
  verticalAlign: token.EFLEXALIGN.CENTER,
  textAlign: token.ETEXTALIGN.LEFT,
  bufferTop: token.ESIZE.ZERO,
  bufferBottom: token.ESIZE.ZERO,
}
export default Column
