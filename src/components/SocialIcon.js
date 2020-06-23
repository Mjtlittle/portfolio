import React from 'react'
import { IconContext } from 'react-icons'

import styles from './SocialIcon.module.sass'

const SocialIcon = ({ icon, href }) => {
  const IconComp = icon
  return (
    <IconContext.Provider
      value={{ color: 'black', size: '2em', className: styles.icon }}
    >
      <a href={href}>
        <IconComp />
      </a>
    </IconContext.Provider>
  )
}

export default SocialIcon
