import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "projects" } }
          frontmatter: { isPublished: { eq: true } }
        }
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              tags
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 512) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
            fields {
              slug
              collection
            }
          }
        }
      }
    }
  `)

  return <Layout></Layout>
}

export default Projects
