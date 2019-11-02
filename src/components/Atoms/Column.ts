import React from 'react'
import styled from 'styled-components'
import { IFlexalign, ISize, ITextalign } from '../tokens'

export interface IColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * alignment along vertical axis
   */
  verticalAlign?: IFlexalign
  /**
   * gap above top of item
   */
  bufferTop?: ISize
  /**
   * gap below bottom of item
   */
  bufferBottom?: ISize
  /**
   * text alignment
   */
  textAlign?: ITextalign
}

const Column = styled.div<IColumnProps>`
    display: flex;
    flex-direction: column;

    align-self: ${({ verticalAlign = 'left' }) => verticalAlign};
    ${({ bufferTop = 'single' }) => bufferTop && `margin-top: ${bufferTop};`}
    ${({ bufferBottom = 'single' }) => bufferBottom && `margin-bottom: ${bufferBottom};`}

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
