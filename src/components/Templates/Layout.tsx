import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'

export interface IPrimaryNavProps {
  primaryNav: {
    edges: {
      node: {
        frontmatter: {
          MainNavOrder: number
          secondaryNavMenu: string
          secondaryNavOrder: number
          title: string
        }
      }
    }
  }
}

export interface ISecondaryNavProps {
  secondaryNav: {
    edges: {
      node: {
        frontmatter: {
          secondaryNavMenu: string
          secondaryNavOrder: number
          title: string
        }
      }
    }
  }
}

export interface ISiteMetaProps {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

export interface IStaticQueryProps extends ISiteMetaProps, IPrimaryNavProps, ISecondaryNavProps {}

const AccessibilityMainContentSkipLink = styled.a`
  height: 1px;
  width: 1px;
  position: absolute;
  top: -10px;
  overflow: hidden;
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }
  body {
    margin: 0;
    font-family: system;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: system;
  }
  #gatsby-noscript {
    display:none;
  }
`

const Layout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
        primaryNav: allJavascriptFrontmatter(
          filter: { frontmatter: { MainNavOrder: { gt: 0 } } }
          sort: {fields: frontmatter___MainNavOrder, order: ASC}
          ) {
          edges {
            node {
              frontmatter {
                path
                MainNavOrder
                secondaryNavMenu
                secondaryNavOrder
                title
              }
            }
          }
        }
        secondaryNav: allJavascriptFrontmatter(
          filter: { frontmatter: { secondaryNavOrder: { gt: 0 } } }
          sort: {fields: frontmatter___secondaryNavOrder, order: ASC}
        ) {
          edges {
            node {
              frontmatter {
                path
                MainNavOrder
                secondaryNavMenu
                secondaryNavOrder
                title
              }
            }
          }
        }
      }
    `}
    render={(data: IStaticQueryProps) => (
      <>
        <GlobalStyle />
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content="FreeBabylon5" />
          <script type="application/ld+json">
            {`
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "#FreeBabylon5",
              "url": "https://www.gatsby-starter-carraway.com",
            `}
        </script>
        </Helmet>
        <AccessibilityMainContentSkipLink href="#main">
          Skip to main content
        </AccessibilityMainContentSkipLink>
        <Header siteTitle={data.site.siteMetadata.title} primaryNav={data.primaryNav} />
        <main id="main">{children}</main>
        <Footer
          siteTitle={data.site.siteMetadata.title}
          primaryNav={data.primaryNav}
          secondaryNav={data.secondaryNav}
        />
      </>
    )}
  />
)
export default Layout
