import React from 'react'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Footer = () => {
  const { name, year } = useSiteMetadata()

  return (
    <div>
      <b>{name}</b> - © {year}
    </div>
  )
}

export default Footer
