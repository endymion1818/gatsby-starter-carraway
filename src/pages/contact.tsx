import React, { FC } from 'react'

import Container from '../components/Atoms/Container'
import Wrapper from '../components/Atoms/Wrapper'
import Form from '../components/Molecules/Form'
import Entry from '../components/Templates/Entry'

export interface IAboutPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export const frontmatter = {
  title: 'Contact',
  path: 'contact',
  description: 'Welcome to Free Babylon 5 campaign site.',
  MainNavOrder: 4,
  secondaryNavMenu: 'About',
  secondaryNavOrder: 4,
}

const AboutPage: FC<IAboutPageProps> = () => (
  <Entry pageTitle={frontmatter.title} pageDescription={frontmatter.description}>
    <Wrapper>
      <Container>
          <h1>About Nick Carraway</h1>
          <Form />
      </Container>
    </Wrapper>
  </Entry>
)

export default AboutPage
