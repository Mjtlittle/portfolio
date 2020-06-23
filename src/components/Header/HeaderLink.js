import React from 'react'

import styles from './Header.module.sass'

import { Link } from 'gatsby'

const HeaderLink = ({ to, children }) => {
  return (
    <Link to={to} className={styles.link} activeClassName={styles.current_link}>
      {children}
    </Link>
  )
}

export default HeaderLink
