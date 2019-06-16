import Link from 'gatsby-link'
import React, { FC } from 'react'

export interface INavigationProps {
  navitems: Array<{
    title: string
    url: string
    navOrder: number
  }>
}

const Navigation: FC<INavigationProps> = ({ navitems }) => {
  return (
    <nav>
      <ul>
        {navitems.map(item => (
          <li key={item.title}>
            <Link to={item.url} activeClassName="active">{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
