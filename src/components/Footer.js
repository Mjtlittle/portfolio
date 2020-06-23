import React from 'react'

import styles from './Footer.module.sass'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Footer = () => {
  const { name, year } = useSiteMetadata()

  return (
    <div className={styles.container}>
      <b>{name}</b> - © {year}
    </div>
  )
}

export default Footer
