import React from 'react'

import { graphql } from 'gatsby'

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
  return <div></div>
}

export default Project
