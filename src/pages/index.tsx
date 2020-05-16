import React, { FC } from 'react'
import Container from '../components/Atoms/Container'
import Wrapper from '../components/Atoms/Wrapper'
import Entry from '../components/Templates/Entry'
import Row from '../components/Atoms/Row'

export interface IIndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export const frontmatter = {
  title: 'Home',
  path: '/',
  description: 'Welcome to Free Babylon 5 campaign site.',
  MainNavOrder: 1,
  secondaryNavMenu: 'About',
  secondaryNavOrder: 1,
}

const IndexPage: FC<IIndexPageProps> = () => (
  <Entry pageTitle={frontmatter.title} pageDescription={frontmatter.description}>
    <Wrapper>
      <Container>
        <Row size={1}>
          <h1>Home</h1>
        </Row>
      </Container>
    </Wrapper>
  </Entry>
)

export default IndexPage
