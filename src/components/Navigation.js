import React from 'react'
import styles from './Navigation.module.sass'

const NavLink = () => {
  return <div className={styles.link}></div>
}

const Navigation = () => {
  return (
    <div className={styles.root}>
      <div className='icon'></div>
      <div className='links'></div>
    </div>
  )
}

export default Navigation
