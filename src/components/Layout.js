import React from 'react'

import Head from './Head'
import Topbar from './Topbar'

import { CssBaseline, Container } from '@material-ui/core'

const Layout = ({ title, children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Head title={title} />
      <Topbar />
      <Container>{children}</Container>
    </React.Fragment>
  )
}

Layout.defaultProps = {
  title: '',
}

export default Layout
