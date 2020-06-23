import React from 'react'

import '../styles/base.sass'

import styles from './Layout.module.sass'
import Header from './Header'
import Footer from './Footer'
import Head from './Head'

const Layout = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head title={title} />
      <div className={styles.continer}>
        <Header />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}

Layout.defaultProps = {
  title: '',
}

export default Layout
