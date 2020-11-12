import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/Layout'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

import Section from '../components/Section'

const Home = () => {
  const { name, email } = useSiteMetadata()

  return (
    <Layout>
      <Section type='light'>im in light section</Section>
      <Section type='dark'>im in dark section</Section>
    </Layout>
  )
}

export default Home
