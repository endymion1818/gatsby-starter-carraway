import { graphql, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import PropTypes from 'prop-types'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import Entry from '../components/Templates/Entry'

export interface ICategoriesPageProps {
  data: {
    allMarkdownRemark: {
      group: Array<{
        fieldValue: number
        totalCount: number
      }>
    }
    site: {
      siteMetadata: {
        title: string
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
  <Entry>
    <h1>Categories</h1>
    <ul>
      {group.map(({ fieldValue, totalCount }) => (
        <li key={fieldValue}>
          <Link to={`/categories/${kebabCase(fieldValue.toString())}/`}>
            {fieldValue} ({totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </Entry>
)

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
