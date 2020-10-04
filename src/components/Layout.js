import React from 'react'

import Head from './Head'
import Topbar from './Topbar'

import styles from './Layout.module.sass'
import '../styles/global.sass'

const Layout = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head title={title} />
      <div className={styles.root}>
        <div className={styles.content}>
          <Topbar />
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}

Layout.defaultProps = {
  title: '',
}

export default Layout
