import React from 'react'

import Layout from '../components/Layout'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Home = () => {
  const { name, email } = useSiteMetadata()

  return <Layout></Layout>
}

export default Home
