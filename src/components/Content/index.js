import React from 'react'

import styles from './Content.module.sass'

import Wave from '../../assets/wave.svg'

const Content = ({ children, topCurve }) => {
  return (
    <div className={styles.container}>
      {topCurve && <Wave className={styles.top_wave} />}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

Content.defaultProps = {
  topCurve: false,
}

export default Content
