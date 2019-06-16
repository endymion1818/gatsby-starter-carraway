import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Atoms/Container'
import Row from '../components/Atoms/Row'
import Wrapper from '../components/Atoms/Wrapper'
import Layout from '../components/Templates/Layout'

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
  title: 'About',
  path: 'about',
  description: 'Welcome to Free Babylon 5 campaign site.',
  MainNavOrder: 2,
  secondaryNavMenu: 'About',
  secondaryNavOrder: 2,
}

const AboutPage: FC<IAboutPageProps> = ({ data }) => (
  <Layout>
    <Helmet>
      <title>
        {frontmatter.title} &ndash; {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={frontmatter.description} />
    </Helmet>
    <Wrapper>
      <Container>
        <Row size={1}>
          <h1>About Nick Carraway</h1>
          <p>
          In his narration, Nick Carraway explains that he was born in the Middle West. The Carraway Family has settled in hardware business since 1851 and are something of a clan. Nick served in World War I in the third division. At a young age he was advised by his father to reserve all judgements on any person. After the war he moves to West Egg, a wealthy enclave of Long Island, from the Middle West to learn about the bond business. He lives near his cousin, Daisy Buchanan, and her wealthy husband Tom who was Nick's classmate at Yale University. They introduce him to their friend Jordan Baker, a cynical young heiress and professional golfer, and she and Nick have a brief romance.
          </p>
          <p>
            Another neighbor, Jay Gatsby, invites Nick to one of his legendary parties. Nick is immediately intrigued by the mysterious socialite, especially when Gatsby introduces him to the gangster, Meyer Wolfsheim, who is rumored to have helped Gatsby make his fortune in the bootlegging business. Nick and Gatsby served together during the Great War. Gatsby takes a liking to Nick, and confesses to him that he has been in love with Daisy since before the war and that his extravagant lifestyle is just an attempt to impress her. He asks Nick for his help in winning her over. Nick invites Daisy over to his house without telling her that Gatsby will be there. When Gatsby and Daisy resume their love affair, Nick serves as their confidant.
          </p>
          <p>
            Nick later discovers that Daisy struck and killed George's wife (and Tom's lover), Myrtle Wilson, in Gatsby's car. Tom then tells George that Gatsby had been driving the car. George then kills Gatsby and then himself. Nick holds a funeral for Gatsby and decides to leave West Egg and return to his native Midwest, reflecting that the era of dreaming that Gatsby represented is over.
          </p>
        </Row>
      </Container>
    </Wrapper>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
