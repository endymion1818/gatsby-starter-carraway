const path = require(`path`)
const _ = require(`lodash`)
const { paginate } = require(`gatsby-awesome-pagination`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/components/Templates/Post.tsx`)
  const categoryTemplate = path.resolve(`./src/components/Templates/Category.tsx`)
  const archiveTemplate = path.resolve(`./src/components/Templates/Archive.tsx`)

  return graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                categories
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    console.log(result)

    // Create blog posts pages.
    const posts = result.data.Mdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: post.node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
    // archive pages
    paginate({
      createPage,
      items: posts,
      itemsPerPage: 10,
      pathPrefix: '/post',
      component: archiveTemplate,
    })
    // taxonomy pages
    let categories = []
    _.each(posts, edge => {
      if (_.get(edge, `node.frontmatter.categories`)) {
        categories = categories.concat(edge.node.frontmatter.categories)
      }
    })
    categories = _.uniq(categories)

    categories.forEach(category => {
      createPage({
        path: `/categories/${_.kebabCase(category)}/`,
        component: categoryTemplate,
        context: {
          category,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}
