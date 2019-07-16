import { graphql } from 'gatsby'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import Container from '../Atoms/Container'
import Wrapper from '../Atoms/Wrapper'
import Layout from './Layout'

interface IPageTemplateProps {
  title?: string
  description?: string
  children: JSX.Element
}

const PageTemplate: FC<IPageTemplateProps> = ({ title, description, children }) => {
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </Layout>
  )
}

export default PageTemplate

PageTemplate.defaultProps = {
  title: 'no content',
  description: "there's currently no content in this page",
  children: <p>empty page</p>,
}
