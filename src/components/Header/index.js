import React from 'react'

import { useSiteMetadata } from '../../hooks/useSiteMetadata'

import { Link } from 'gatsby'

import styles from './Header.module.sass'

import HeaderLink from './HeaderLink'

const Header = ({ children }) => {
  const { name } = useSiteMetadata()
  const initials = name.split(' ').reduce((s, n) => s + n[0].toUpperCase(), '')

  return (
    <React.Fragment>
      <div className={styles.container}>
        <Link className={styles.logo} to='/'>
          {initials}
        </Link>
        <div className={styles.links}>
          <HeaderLink to='/'>Home</HeaderLink>
          <HeaderLink to='/#about'>About</HeaderLink>
          <HeaderLink to='/#contact'>Contact</HeaderLink>
          <HeaderLink to='/projects'>Projects</HeaderLink>
          {/* <HeaderLink to='/blog'>Blog</HeaderLink> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
