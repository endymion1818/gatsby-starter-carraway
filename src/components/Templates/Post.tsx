import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import Container from '../Atoms/Container'
import Link from '../Atoms/Link'
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
        featuredImageAlt: string
        featuredImage: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
        title: string
        date: string
        categories: string[]
        tags: string[]
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
  const { categories, tags } = data.markdownRemark.frontmatter
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
                          {categories ? (
                            <>
                              <h4>Categories:</h4>
                              <ul>
                                {categories.map(category => (
                                  <li key={category.replace(/ /g, '_')}>
                                    <Link href={`/categories/${category}`}>{category}</Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : null}
                          {tags ? (
                            <>
                              <h4>Tags:</h4>
                              <ul>
                                {tags.map(tag => (
                                  <li key={tag.replace(/ /g, '_')}>
                                    <Link href={`/tags/${tag}`}>{tag}</Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : null}
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
        categories
        tags
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
