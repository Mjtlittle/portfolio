import React from 'react'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Head = ({ title }) => {
  const { siteTitle } = useSiteMetadata()

  const suffix = title === '' ? '' : `${title} | `

  return <Helmet title={`${suffix}${siteTitle}`}></Helmet>
}

export default Head
