import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import Container from '../Atoms/Container'
import Wrapper from '../Atoms/Wrapper'
import Layout from './Layout'

interface IPageTemplateProps {
  pageTitle?: string
  pageDescription?: string
}

const PageTemplate: FC<IPageTemplateProps> = ({ pageTitle, pageDescription, children }) => {
  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </Layout>
  )
}

export default PageTemplate
