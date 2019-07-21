import { withPrefix } from 'gatsby'
import React, { FC } from 'react'
import Link from '../Atoms/Link'

export interface INavItemProps {
  node: {
    frontmatter: {
      path: string
      title: string
    }
  }
}

const NavItem: FC<INavItemProps> = ({ node }) => {
  if (!node) {
    return null
  }
  const { path } = node.frontmatter
  const { title } = node.frontmatter
  return (
    <li key={path}>
      <Link activeClassName="active" to={withPrefix(path)}>
        {title}
      </Link>
    </li>
  )
}
export default NavItem
