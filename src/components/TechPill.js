import React from 'react'
import { IconContext } from 'react-icons'

import styles from './TechPill.module.sass'

const TechPill = ({ icon, label }) => {
  const IconComp = icon
  return (
    <div className={styles.container}>
      <IconContext.Provider
        value={{ color: 'black', size: '3em', className: styles.icon }}
      >
        <IconComp />
        <div className={styles.label}>{label}</div>
      </IconContext.Provider>
    </div>
  )
}

export default TechPill
