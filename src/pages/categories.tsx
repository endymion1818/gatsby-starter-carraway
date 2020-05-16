import { graphql, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import React, { FC } from 'react'
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
  },
}) => (
  <Entry pageTitle="All categories" pageDescription="a list of categories">
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
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
