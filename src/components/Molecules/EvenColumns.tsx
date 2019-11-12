import React, { FC } from 'react'
import Column from '../Atoms/Column'
import Row from '../Atoms/Row'
import { flexalign, size, textalign } from '../tokens'

export interface IEvenColumnsGlobalProps {
  textAlign?: string
  bufferTop?: string
  bufferBottom?: string
  verticalAlign?: string
}

export interface IRenderContentProps extends IEvenColumnsGlobalProps {
  item: { innerContent: JSX.Element }
  index: number
}

export const renderContent: FC<IRenderContentProps> = ({
  item,
  index,
  textAlign = textalign.left,
  bufferBottom = size.zero,
  bufferTop = size.zero,
  verticalAlign = flexalign.start,
}) => {
  if (!item) {
    return null
  }
  return (
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
}

export interface IEvenColumnsProps extends IEvenColumnsGlobalProps {
  content: Array<{ innerContent: JSX.Element }>
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

export default EvenColumns
