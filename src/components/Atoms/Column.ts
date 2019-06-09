import styled from 'styled-components'
import * as variable from '../constants'

export interface IColumnProps {
  /**
   * alignment along vertical axis
   * @default variable.EFLEXALIGN.CENTER
   */
  verticalAlign?: variable.EFLEXALIGN
  /**
   * gap above top of item
   * @default variable.ESIZE.ZERO
   */
  bufferTop?: variable.ESIZE
  /**
   * gap below bottom of item
   * @default variable.ESIZE.ZERO
   */
  bufferBottom?: variable.ESIZE
  /**
   * text alignment
   * @default variable.ETEXTALIGN.LEFT
   */
  textAlign?: variable.ETEXTALIGN
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
  verticalAlign: variable.EFLEXALIGN.CENTER,
  textAlign: variable.ETEXTALIGN.LEFT,
  bufferTop: variable.ESIZE.ZERO,
  bufferBottom: variable.ESIZE.ZERO,
}
export default Column
