import React from 'react'

import Head from './Head'
import Topbar from './Topbar'

import styles from './Layout.module.sass'

const Layout = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head title={title} />
      <div className={styles.root}>
        <Topbar />
        <div className={styles.content}>{children}</div>
      </div>
    </React.Fragment>
  )
}

Layout.defaultProps = {
  title: '',
}

export default Layout
