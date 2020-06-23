const path = require('path')
const slugify = require('slugify')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  const parent = getNode(node.parent)

  if (node.internal.type === 'MarkdownRemark') {
    // add relative collection to nodes
    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    })

    // generate slug for all markdown nodes
    const slug = slugify(parent.relativeDirectory, { lower: true })
    createNodeField({
      node,
      name: 'slug',
      value: `/${parent.sourceInstanceName}/${slug}`,
    })
    //console.log(`/${parent.sourceInstanceName}/${slug}`)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projects = await graphql(`
    query {
      projects: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "projects" } }
          frontmatter: { isPublished: { eq: true } }
        }
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (projects.errors) throw projects.errors

  projects.data.projects.edges.forEach((edge) => {
    const slug = edge.node.fields.slug
    createPage({
      component: path.resolve('src/templates/project.js'),
      path: slug,
      context: {
        slug: slug,
      },
    })
  })
}
