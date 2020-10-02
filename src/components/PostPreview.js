import React from 'react'

import SideNotch from './SideNotch'

import styles from './PostPreview.module.sass'
import { Link, navigate } from 'gatsby'

const PostPreview = ({ title, description, to }) => {
  const onClickLink = () => navigate(to)
  return (
    <div className={styles.root}>
      <SideNotch>
        <div className={styles.side_date}>
          <b>MAR 12</b>
          <span>2011</span>
        </div>
      </SideNotch>
      <div className={styles.container}>
        <h1 onClick={onClickLink}>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PostPreview
