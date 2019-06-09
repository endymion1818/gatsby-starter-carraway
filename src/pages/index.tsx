import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Templates/Layout'
export interface IIndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export const frontmatter = {
  title: 'Home',
  path: '/',
  description: 'Welcome to Free Babylon 5 campaign site.',
  MainNavOrder: 1,
  secondaryNavMenu: 'About',
  secondaryNavOrder: 1,
}

const IndexPage: FC<IIndexPageProps> = ({ data }) => (
  <Layout>
    <Helmet>
      <title>
        {frontmatter.title} &ndash; {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={frontmatter.description} />
    </Helmet>
    <h1>Home</h1>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
