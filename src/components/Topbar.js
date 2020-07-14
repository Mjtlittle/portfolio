import React from 'react'

import { Link } from 'gatsby'

import { FiPackage } from 'react-icons/fi'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

import styles from './Topbar.module.sass'

import SideNotch from './SideNotch'

const TopbarLink = ({ label, to }) => (
  <Link className={styles.link} to={to} activeClassName={styles.link_active}>
    {label}
  </Link>
)

const Topbar = () => {
  const { name } = useSiteMetadata()
  const [firstname, lastname] = name.split(' ')

  return (
    <div className={styles.root}>
      <SideNotch>
        <FiPackage size='3em' />
      </SideNotch>
      <div className={styles.title}>
        {firstname}
        <b>{lastname}</b>
      </div>
      <div className={styles.links}>
        <TopbarLink label='Home' to='/' />
        <TopbarLink label='Projects' to='/projects' />
        <TopbarLink label='About' to='/about' />
      </div>
    </div>
  )
}

export default Topbar
