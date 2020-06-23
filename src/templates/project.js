import React from 'react'

import { graphql } from 'gatsby'

import styles from './project.module.sass'

import Layout from '../components/Layout'
import Content from '../components/Content'
import TagStrip from '../components/TagStrip'

export const query = graphql`
  query($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
const Project = ({ data }) => {
  const { title, date, tags } = data.project.frontmatter
  return (
    <Layout title={title}>
      <Content>
        <h1>{title}</h1>
        <div className={styles.info}>
          <TagStrip tags={tags} />
          <br />
          {date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.project.html }} />
      </Content>
    </Layout>
  )
}

export default Project
