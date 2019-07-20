import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import Container from '../Atoms/Container'
import Wrapper from '../Atoms/Wrapper'
import EvenColumns from '../Molecules/EvenColumns'
import Layout from './Layout'

interface IPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        type: string
        featuredImage: {
          childImageSharp: {
            fluid: {
              aspectRatio: string
              src: string
              srcSet: string
              sizes: string
            }
          }
        }
        featuredImageAlt: string
        title: string
        date: string
        categories: string[]
      }
    }
    nextPost?: {
      frontmatter: {
        title: string
      }
      fields: {
        slug: string
      }
    }
    prevPost?: {
      frontmatter: {
        title: string
      }
      fields: {
        slug: string
      }
    }
  }
}

const PostTemplate: FC<IPostTemplateProps> = ({ data }) => {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { type } = data.markdownRemark.frontmatter
  const { date } = data.markdownRemark.frontmatter
  const { featuredImage } = data.markdownRemark.frontmatter
  const { featuredImageAlt } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content="#FreeBabylon5" />
      </Helmet>
      <Wrapper>
        <Container>
          <EvenColumns
            content={[
              {
                innerContent: (
                  <>
                    <article className="h-entry">
                      <header>
                        <h1>{title}</h1>
                        {featuredImage && (
                          <Img fluid={featuredImage.childImageSharp.fluid} alt={featuredImageAlt} />
                        )}
                      </header>
                      <section dangerouslySetInnerHTML={{ __html: html }} />
                      {type !== 'page' && (
                        <footer>
                          <time>Published on: {date}</time>
                          <div>Categories: </div>
                        </footer>
                      )}
                    </article>
                  </>
                ),
              },
            ]}
          />
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
        date(formatString: "DD MMMM, YYYY")
        featuredImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
