import React from 'react'

import styles from './SideNotch.module.sass'

const SideNotch = ({ children, className }) => {
  let classes = [styles.root]
  if (className) classes.push(className)

  return <div className={classes.join(' ')}>{children}</div>
}

export default SideNotch
