/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    name: 'Joshua Little',
    siteTitle: 'Josh L',
    year: 2020,
    email: 'jplittle2001+website@gmail.com',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-svg',

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    // filesystem includes
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/content/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/content/projects/`,
      },
    },

    // remark & image resizing
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1440,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
