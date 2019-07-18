import React, { FC } from 'react'
import styled from 'styled-components'
import Link from '../Atoms/Link'

import { withPrefix } from 'gatsby'
import Column from '../Atoms/Column'
import Container from '../Atoms/Container'
import Row from '../Atoms/Row'
import Wrapper from '../Atoms/Wrapper'
import { IPrimaryNavProps, ISecondaryNavProps } from '../Templates/Layout'
import * as token from '../tokens'

export interface IFooterProps extends IPrimaryNavProps, ISecondaryNavProps {
  siteTitle: string
}

const SecondaryNav = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    a {
      display: block;
      padding: ${token.ESIZE.SINGLE};
      text-decoration: none;
      border-radius: ${token.EBORDERRADIUS.MEDIUM};
      color: ${token.ETEXT_COLOUR.ON_SURFACE};

      &:hover,
      &:active,
      &:focus {
        background-color: ${token.EBACKGROUND_COLOUR.SURFACE};
        color: ${token.ETEXT_COLOUR.ON_SURFACE};
      }
      &.active {
        background-color: ${token.EBACKGROUND_COLOUR.SURFACE_ALT};
        color: ${token.ETEXT_COLOUR.ON_SURFACE};
      }
    }
  }
`

const Footer: FC<IFooterProps> = ({ secondaryNav, primaryNav, siteTitle }) => (
  <Wrapper backgroundColour={token.EBACKGROUND_COLOUR.SURFACE_ALT}>
    <Container>
      <Row size={3}>
        <Column>
          <h3>About This Site</h3>
          <Link to={withPrefix('/')}>{siteTitle}</Link>
          <p>Copyright notice or something nice.</p>
          <p>
            <Link to="#">Link 1</Link>
          </p>
        </Column>
        <Column>
          <h3>This Site</h3>
          <SecondaryNav>
            {primaryNav
              ? primaryNav.edges.map(item => (
                  <li key={item.node.frontmatter.path}>
                    <Link activeClassName="active" to={withPrefix(item.node.frontmatter.path)}>
                      {item.node.frontmatter.title}
                    </Link>
                  </li>
                ))
              : null}
          </SecondaryNav>
        </Column>
        <Column>
          <h3>Navigate</h3>
          <SecondaryNav>
            {secondaryNav
              ? secondaryNav.edges.map(item => (
                  <li key={item.node.frontmatter.path}>
                    <Link activeClassName="active" to={withPrefix(item.node.frontmatter.path)}>
                      {item.node.frontmatter.title}
                    </Link>
                  </li>
                ))
              : null}
            <li>
              <Link to="/feed.xml">RSS Feed</Link>
            </li>
          </SecondaryNav>
        </Column>
      </Row>
    </Container>
  </Wrapper>
)

export default Footer
