import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import Container from '../Atoms/Container'
import Link from '../Atoms/Link'
import Wrapper from '../Atoms/Wrapper'
import Entry from './Entry'

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
        description: string
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
  const { description } = data.markdownRemark.frontmatter
  const { type } = data.markdownRemark.frontmatter
  const { date } = data.markdownRemark.frontmatter
  const { featuredImage } = data.markdownRemark.frontmatter
  const { featuredImageAlt } = data.markdownRemark.frontmatter
  const { categories } = data.markdownRemark.frontmatter
  return (
    <Entry pageTitle={title} pageDescription={description}>
      <Wrapper>
        <Container>
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
                      {categories.map((category) => (
                        <li key={category}>
                          <Link href={`/categories/${category.replace(/ /g, '-')}`}>
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </footer>
            )}
          </article>
        </Container>
      </Wrapper>
    </Entry>
  )
}

export default PostTemplate

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        categories
        type
        description
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
