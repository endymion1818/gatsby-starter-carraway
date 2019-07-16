import React, { FC } from 'react'
import Column from '../Atoms/Column'
import Row from '../Atoms/Row'
import * as token from '../tokens'

export interface IEvenColumnsGlobalProps {
  /**
   * text alignment
   * @default token.ETEXTALIGN.LEFT
   */
  textAlign?: token.ETEXTALIGN
  /**
   * buffer top
   * @default token.ESIZE
   */
  bufferTop?: token.ESIZE
  /**
   * buffer bottom
   * @default token.ESIZE
   */
  bufferBottom?: token.ESIZE
  /**
   * vertical align
   * @default token.EFLEXALIGN.TOP
   */
  verticalAlign?: token.EFLEXALIGN
}

export interface IRenderContentProps extends IEvenColumnsGlobalProps {
  /**
   * an array of objects with JSX elements
   * @default <>&nbsp;</>
   */
  item: { innerContent: JSX.Element }
  /**
   * index
   * @default 0
   */
  index: number
}

export const renderContent: FC<IRenderContentProps> = ({
  item,
  index,
  textAlign = token.ETEXTALIGN.LEFT,
  bufferBottom = token.ESIZE.ZERO,
  bufferTop = token.ESIZE.ZERO,
  verticalAlign = token.EFLEXALIGN.START,
}) => (
  <Column
    key={index}
    textAlign={textAlign}
    bufferBottom={bufferBottom}
    bufferTop={bufferTop}
    verticalAlign={verticalAlign}
  >
    {item.innerContent}
  </Column>
)

export interface IEvenColumnsProps extends IEvenColumnsGlobalProps {
  /**
   * an array of objects with JSX elements
   * @default <>&nbsp;</>
   */
  content: Array<{ innerContent: JSX.Element }>
  /**
   * index
   * @default 0
   */
  index?: number
}

const EvenColumns: FC<IEvenColumnsProps> = ({
  content,
  textAlign,
  bufferBottom,
  bufferTop,
  verticalAlign,
}) => (
  <Row size={content.length}>
    {content.map((item, index) =>
      renderContent({
        item,
        index,
        textAlign,
        bufferBottom,
        bufferTop,
        verticalAlign,
      })
    )}
  </Row>
)

EvenColumns.defaultProps = {
  content: [
    {
      innerContent: <div>test</div>,
    },
  ],
  index: 0,
  textAlign: token.ETEXTALIGN.LEFT,
  bufferTop: token.ESIZE.ZERO,
  bufferBottom: token.ESIZE.ZERO,
  verticalAlign: token.EFLEXALIGN.START,
}

export default EvenColumns
