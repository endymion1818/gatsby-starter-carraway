import { graphql, withPrefix } from 'gatsby'
import React, { FC } from 'react'
import Link from '../Atoms/Link'
import Page from '../Templates/Page'

export interface IArchiveProps {
  data: {
    posts: {
      edges: {
        node: {
          frontmatter: {
            title: string
            date: string
          }
        }
      }
    }
  }
  pageContext: {
    previousPagePath?: string
    nextPagePath?: string
  }
}

const Archive: FC<IArchiveProps> = ({ data, pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  const { posts } = data

  return (
    <Page>
      <h2>All Posts</h2>
      {posts &&
        posts.edges.map((edge, index) => (
          <article key={index}>
            <h2>
              <Link to={withPrefix(edge.node.fields.slug)}>{edge.node.frontmatter.title}</Link>
            </h2>
            <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
            <br />
            <div>
              Posted on: <time>{edge.node.frontmatter.date}</time>
            </div>
          </article>
        ))}
      <nav>
        <ul>
          {previousPagePath && (
            <li>
              <Link to={previousPagePath}>Previous</Link>
            </li>
          )}
          {nextPagePath && (
            <li>
              <Link to={nextPagePath}>Next</Link>
            </li>
          )}
        </ul>
      </nav>
    </Page>
  )
}

export default Archive

export const archiveQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allMdx(
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
