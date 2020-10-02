import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Row from '../components/Row'
import SideNotch from '../components/SideNotch'
import PostPreview from '../components/PostPreview'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Home = () => {
  const { name, email } = useSiteMetadata()

  return (
    <Layout>
      <PostPreview
        to='https://www.google.com/'
        title='This is an Example Post title'
        description='this is an example post for my blog. Here will be a detailed description of the post and what it contains. Im not a hundred percent sure what will go here but i need to test really long text'
      />
      <PostPreview
        title='This is an Example Post title 2'
        description='this is an example post 2 for my blog. Here will be a detailed description of the post and what it contains. Im not a hundred percent sure what will go here but i need to test really long text'
      />
    </Layout>
  )
}

export default Home
