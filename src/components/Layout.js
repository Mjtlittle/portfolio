import React from 'react'

import Head from './Head'

import styles from './Layout.module.sass'
import '../styles/global.sass'

const Layout = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head title={title} />
      <div className={styles.root}>{children}</div>
    </React.Fragment>
  )
}

Layout.defaultProps = {
  title: '',
}

export default Layout
