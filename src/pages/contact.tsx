import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Atoms/Container'
import Row from '../components/Atoms/Row'
import Wrapper from '../components/Atoms/Wrapper'
import Layout from '../components/Templates/Layout'
import Form from '../components/Molecules/Form'

export interface IAboutPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export const frontmatter = {
  title: 'Contact',
  path: 'contact',
  description: 'Welcome to Free Babylon 5 campaign site.',
  MainNavOrder: 4,
  secondaryNavMenu: 'About',
  secondaryNavOrder: 4,
}

const AboutPage: FC<IAboutPageProps> = ({ data }) => (
  <Layout>
    <Helmet>
      <title>
        {frontmatter.title} &ndash; {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={frontmatter.description} />
    </Helmet>
    <Wrapper>
      <Container>
        <Row size={1}>
          <h1>About Nick Carraway</h1>
          <Form/>
        </Row>
      </Container>
    </Wrapper>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
