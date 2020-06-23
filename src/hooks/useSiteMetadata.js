import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            name
            year
            email
            siteTitle
          }
        }
      }
    `
  )
  return site.siteMetadata
}
