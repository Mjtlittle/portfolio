import React from 'react'

import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'

import styles from './404.module.sass'

const Error404 = () => {
  return (
    <Layout title='404'>
      <Jumbotron>
        <div className={styles.title}>
          404
          <br />
          <span>The page you where looking for could not be found</span>
          <br />
        </div>
      </Jumbotron>
    </Layout>
  )
}

export default Error404
