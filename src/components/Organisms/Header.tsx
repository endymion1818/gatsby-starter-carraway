import React, { FC } from 'react'
import styled from 'styled-components'
import Container from '../Atoms/Container'
import Link from '../Atoms/Link'
import Wrapper from '../Atoms/Wrapper'
import * as variable from '../constants'
import SearchForm from '../Molecules/SearchForm'
import { IPrimaryNavProps } from '../Templates/Layout'

export interface IHeaderProps extends IPrimaryNavProps {
  siteTitle: string
}

const MainNav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  overflow-x: auto;

  li {
    a {
      display: block;
      padding: ${variable.ESIZE.SINGLE};
      text-decoration: none;
      border-radius: ${variable.EBORDERRADIUS.MEDIUM};

      &:hover,
      &:active,
      &:focus {
        background-color: ${variable.EBACKGROUND_COLOUR.SURFACE};
        color: ${variable.ETEXT_COLOUR.ON_SURFACE_ALT};
      }
      &.active {
        background-color: ${variable.EBACKGROUND_COLOUR.SURFACE};
        color: ${variable.ETEXT_COLOUR.ON_SURFACE_ALT};
      }
    }
  }
`

const HeaderContainer = styled(Container)`
  overflow-x: hidden;

  @media (min-width: ${variable.EBREAKPOINT.MEDIUM}) {
    display: flex;

    > a {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > ul {
      flex: 3;
    }
  }
`

const Header: FC<IHeaderProps> = ({ primaryNav, siteTitle }) => (
  <Wrapper
    backgroundColour={variable.EBACKGROUND_COLOUR.SURFACE}
    textColour={variable.ETEXT_COLOUR.ON_SURFACE}
  >
    <HeaderContainer>
      <Link to={withPrefix('/')}>{siteTitle}</Link>
      <MainNav>
        {primaryNav
          ? primaryNav.edges.map(item => (
              <li key={item.node.frontmatter.path}>
                <Link activeClassName="active" to={item.node.frontmatter.path}>
                  {item.node.frontmatter.title}
                </Link>
              </li>
            ))
          : null}
          <li>
            <Link to="/post" activeClassName="active">Posts</Link>
          </li>
      </MainNav>
      <SearchForm />
    </HeaderContainer>
  </Wrapper>
)

export default Header
