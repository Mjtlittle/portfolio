import React from 'react'
import styles from './Section.module.sass'

const Section = ({ children, type }) => {
  const typeClass = type === 'light' ? styles.light : styles.dark
  return (
    <div className={`${styles.root} ${typeClass}`}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

Section.defaultProps = {
  type: 'light',
}

export default Section
