import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import styles from './projects.module.sass'

import Layout from '../components/Layout'
import Content from '../components/Content'

import ProjectCard from '../components/ProjectCard'

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

  return (
    <Layout title='Projects'>
      <Content>
        <h1>Projects</h1>
        <div className={styles.projects}>
          {data.projects.edges.map((edge) => {
            const info = edge.node.frontmatter
            console.log(info.featuredImage)
            return (
              <ProjectCard
                key={edge.node.id}
                title={info.title}
                description={info.description}
                tags={info.tags}
                fluid={info.thumbnail.childImageSharp.fluid}
                to={edge.node.fields.slug}
              />
            )
          })}
        </div>
      </Content>
    </Layout>
  )
}

export default Projects
