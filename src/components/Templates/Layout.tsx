import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import ErrorBoundary from '../Molecules/ErrorBoundary'
import Footer from '../Organisms/Footer'
import Header from '../Organisms/Header'
import { colors, size } from '../tokens'

import ShareCard from '../../assets/sharecard-default.png'

export interface INavEdges {
  edges: [
    {
      node: {
        frontmatter: {
          MainNavOrder: number
          secondaryNavMenu: string
          secondaryNavOrder: number
          title: string
          path: string
        }
      }
    }
  ]
}

export interface IPrimaryNavProps {
  primaryNav: INavEdges
}

export interface ISecondaryNavProps {
  secondaryNav: INavEdges
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
  position: absolute;
  display: inline-block;
  transform: translateY(-${size.quad});
  padding: ${size.singleplushalf};
  background-color: ${colors.neutral.medium};
  color: ${colors.base.primary};

  &:hover,
  &:focus,
  &:active {
    transform: translateY(-${size.zero});
  }
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
export interface ILayoutProps {
  pageTitle?: string
  pageDescription?: string
  isIndexable?: boolean
}

const Layout: React.SFC<ILayoutProps> = ({ children, pageTitle, pageDescription, isIndexable }) => (
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
          sort: { fields: frontmatter___MainNavOrder, order: ASC }
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
          sort: { fields: frontmatter___secondaryNavOrder, order: ASC }
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
      <ErrorBoundary>
        <GlobalStyle />
        <Helmet>
          <html lang="en-GB" />
          <title>{`${pageTitle} - ${data.site.siteMetadata.title}`}</title>
          <meta
            name="description"
            content={`${pageDescription} - ${data.site.siteMetadata.description}`}
          />
          <script type="application/ld+json">
            {`
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "#FreeBabylon5",
              "url": "https://www.gatsby-starter-carraway.com",
            `}
          </script>
          <meta property="og:site_name" content={data.site.siteMetadata.title} />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={data.site.siteMetadata.description} />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:image" content={ShareCard} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@you" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content={ShareCard} />
          {!isIndexable && <meta name="robots" content="NOINDEX, NOFOLLOW" />}
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
      </ErrorBoundary>
    )}
  />
)
export default Layout
