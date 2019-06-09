import React, { FC } from 'react'
import Column from '../Atoms/Column'
import Row from '../Atoms/Row'
import * as variable from '../constants'

export interface IEvenColumnsGlobalProps {
  /**
   * text alignment
   * @default variable.ETEXTALIGN.LEFT
   */
  textAlign?: variable.ETEXTALIGN
  /**
   * buffer top
   * @default variable.ESIZE
   */
  bufferTop?: variable.ESIZE
  /**
   * buffer bottom
   * @default variable.ESIZE
   */
  bufferBottom?: variable.ESIZE
  /**
   * vertical align
   * @default variable.EFLEXALIGN.TOP
   */
  verticalAlign?: variable.EFLEXALIGN
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
  textAlign = variable.ETEXTALIGN.LEFT,
  bufferBottom = variable.ESIZE.ZERO,
  bufferTop = variable.ESIZE.ZERO,
  verticalAlign = variable.EFLEXALIGN.START,
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
  textAlign: variable.ETEXTALIGN.LEFT,
  bufferTop: variable.ESIZE.ZERO,
  bufferBottom: variable.ESIZE.ZERO,
  verticalAlign: variable.EFLEXALIGN.START,
}

export default EvenColumns
