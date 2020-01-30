import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import Container from '../Atoms/Container'
import Wrapper from '../Atoms/Wrapper'
import Entry from './Entry'

interface IPageTemplateProps {
  pageTitle?: string
  pageDescription?: string
}

const PageTemplate: FC<IPageTemplateProps> = ({ pageTitle, pageDescription, children }) => {
  return (
    <Entry pageTitle={pageTitle} pageDescription={pageDescription}>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </Entry>
  )
}

export default PageTemplate
