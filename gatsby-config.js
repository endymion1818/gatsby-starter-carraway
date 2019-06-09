const siteTitle = `Carraway`

module.exports = {
  siteMetadata: {
    pathPrefix: '/',
    title: siteTitle,
    siteUrl: `https://www.gatsby-starter-carraway.netlify.com`,
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
      },
    },
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
  ],
}
