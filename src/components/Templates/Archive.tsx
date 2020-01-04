import { graphql, withPrefix } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import Link from '../Atoms/Link'
import Page from '../Templates/Page'
import { size } from '../tokens'

export interface IArchiveProps {
  data: {
    posts: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
            date: string
          }
          fields: {
            slug: string
          }
          excerpt: string
        }
      }>
    }
  }
  pageContext: {
    previousPagePath?: string
    nextPagePath?: string
  }
}

const Article = styled.article`
  margin-bottom: ${size.triple};
`

const Archive: FC<IArchiveProps> = ({ data, pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  const { posts } = data

  return (
    <Page pageTitle="All posts">
      {posts &&
        posts.edges.map((edge, index) => (
          <Article key={index}>
            <h2>
              <Link to={withPrefix(edge.node.fields.slug)}>{edge.node.frontmatter.title}</Link>
            </h2>
            <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
            <p>
              <small>
                This was posted on: <time>{edge.node.frontmatter.date}</time>
              </small>
            </p>
            <Link to={withPrefix(edge.node.fields.slug)}>
              &rsaquo; Read more of "{edge.node.frontmatter.title}"
            </Link>
          </Article>
        ))}
      <nav>
        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
          {previousPagePath && (
            <li>
              <Link to={previousPagePath}>&laquo; More Recent posts</Link>
            </li>
          )}
          {nextPagePath && (
            <>
              <br />
              <li>
                <Link to={nextPagePath}>&raquo; Older posts</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </Page>
  )
}

export default Archive

export const archiveQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { ne: "page" } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
