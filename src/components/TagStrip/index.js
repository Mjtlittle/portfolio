import React from 'react'

import styles from './TagStrip.module.sass'

const TagStrip = ({ tags }) => {
  return (
    <div className={styles.container}>
      {tags.map((name) => (
        <div className={styles.tag}>{name}</div>
      ))}
    </div>
  )
}

export default TagStrip
