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
    mdx: {
      html: string
      excerpt: string
      frontmatter: {
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
  const { html } = data.mdx
  const { title } = data.mdx.frontmatter
  const { type } = data.mdx.frontmatter
  const { date } = data.mdx.frontmatter
  const { featuredImage } = data.mdx.frontmatter
  const { featuredImageAlt } = data.mdx.frontmatter

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
    mdx(fields: { slug: { eq: $slug } }) {
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
