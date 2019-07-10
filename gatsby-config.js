const siteTitle = `Carraway`

module.exports = {
  siteMetadata: {
    pathPrefix: '/',
    title: siteTitle,
    siteUrl: `https://www.gatsby-starter-carraway.netlify.com`,
    description: `A starter for Gatsbyjs with typescript, jest and several ui components`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/pages/post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: `dsn-goes-here`,
        environment: process.env.NODE_ENV,
        enabled: (() => [`production`, `stage`].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [],
      },
    },
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        languages: [
          {
            name: 'en',
          },
        ],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'content' },
          { name: 'url', store: true },
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            content: node => node.rawMarkdownBody,
            url: node => node.fields.slug,
          },
        },
      },
    },
  ],
}
