import React, { FC } from 'react'
import Column from '../Atoms/Column'
import Row from '../Atoms/Row'
import * as token from '../tokens'

export interface IEvenColumnsGlobalProps {
  textAlign?: token.ITextalign
  bufferTop?: token.ISize
  bufferBottom?: token.ISize
  verticalAlign?: token.IFlexalign
}

export interface IRenderContentProps extends IEvenColumnsGlobalProps {
  item: { innerContent: JSX.Element }
  index: number
}

export const renderContent: FC<IRenderContentProps> = ({
  item,
  index,
  textAlign = token.textalign.left,
  bufferBottom = token.size.zero,
  bufferTop = token.size.zero,
  verticalAlign = token.flexalign.start,
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
