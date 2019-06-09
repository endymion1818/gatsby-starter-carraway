import { graphql, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import PropTypes from 'prop-types'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Templates/Layout'

export interface ICategoriesPageProps {
  data: {
    allMarkdownRemark: {
      group: [
        {
          category: {
            fieldValue: number
            totalCount: number
          }
        }
      ]
      site: {
        siteMetadata: string
      }
    }
  }
}

const CategoriesPage: FC<ICategoriesPageProps> = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={title} />
    <>
      <h1>Categories</h1>
      <ul>
        {group.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </>
  </Layout>
)

// CategoriesPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }

export default CategoriesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
