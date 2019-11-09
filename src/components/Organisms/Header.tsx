import { withPrefix } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import NavItem from '../../components/Molecules/NavItem'
import Container from '../Atoms/Container'
import Link from '../Atoms/Link'
import Wrapper from '../Atoms/Wrapper'
import SearchForm from '../Molecules/SearchForm'
import { IPrimaryNavProps } from '../Templates/Layout'
import * as token from '../tokens'

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
      padding: ${token.size.single};
      text-decoration: none;
      border-radius: ${token.borderradius.medium};

      &:hover,
      &:active,
      &:focus {
        background-color: ${token.colors.neutral.medium};
        color: ${token.colors.base.primary};
      }
      &.active {
        background-color: ${token.colors.neutral.medium};
        color: ${token.colors.base.primary};
      }
    }
  }
`

const HeaderContainer = styled(Container)`
  overflow-x: hidden;

  @media (min-width: ${token.breakpoint.medium}) {
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
  <Wrapper backgroundColour={token.colors.neutral.medium} textColour={token.colors.base.primary}>
    <HeaderContainer>
      <Link to={withPrefix('/')}>{siteTitle}</Link>
      <MainNav>
        {primaryNav ? primaryNav.edges.map(item => NavItem(item)) : null}
        <li>
          <Link to="/post" activeClassName="active">
            Posts
          </Link>
        </li>
      </MainNav>
      <SearchForm />
    </HeaderContainer>
  </Wrapper>
)

export default Header
