import React from 'react'

import Layout from '../components/Layout'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Home = () => {
  const { name, email } = useSiteMetadata()

  return <Layout>Hello wolrd</Layout>
}

export default Home
