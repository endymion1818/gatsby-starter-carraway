import React from 'react'
import styled from 'styled-components'
import { IFlexalign, ISize, ITextalign } from '../tokens'

export interface IColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  verticalAlign?: IFlexalign
  bufferTop?: ISize
  bufferBottom?: ISize
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
