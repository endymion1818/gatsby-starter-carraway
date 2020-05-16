import React, { FC } from 'react'
import styled from 'styled-components'
import Link from '../Atoms/Link'

import { withPrefix } from 'gatsby'
import NavItem from '../../components/Molecules/NavItem'
import Column from '../Atoms/Column'
import Container from '../Atoms/Container'
import Row from '../Atoms/Row'
import Wrapper from '../Atoms/Wrapper'
import { IPrimaryNavProps, ISecondaryNavProps } from '../Templates/Entry'
import { borderradius, colors, size } from '../tokens'

export interface IFooterProps extends IPrimaryNavProps, ISecondaryNavProps {
  siteTitle: string
}

const SecondaryNav = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    a {
      display: block;
      padding: ${size.single};
      text-decoration: none;
      border-radius: ${borderradius.medium};
      color: ${colors.base.primary};

      &:hover,
      &:active,
      &:focus {
        background-color: ${colors.neutral.medium};
        color: ${colors.base.primary};
      }
      &.active {
        background-color: ${colors.neutral.medium};
        color: ${colors.base.primary};
      }
    }
  }
`

const Footer: FC<IFooterProps> = ({ secondaryNav, primaryNav, siteTitle }) => (
  <Wrapper backgroundColour={colors.neutral.medium} as="footer">
    <Container>
      <Row size={3}>
        <Column>
          <h2>About This Site</h2>
          <Link to={withPrefix('/')}>{siteTitle}</Link>
          <p>Copyright notice or something nice.</p>
          <p>
            <Link to="#">Link 1</Link>
          </p>
        </Column>
        <Column>
          {primaryNav ? (
            <>
              <h3>This Site</h3>
              <SecondaryNav>{primaryNav.edges.map((item) => NavItem(item))}</SecondaryNav>
            </>
          ) : null}
        </Column>
        <Column>
          <h3>Navigate</h3>
          <SecondaryNav>
            {secondaryNav ? secondaryNav.edges.map((item) => NavItem(item)) : null}
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
