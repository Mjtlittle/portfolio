import React from 'react'

import { Link } from 'gatsby'

import {
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaNode,
  FaReact,
  FaJava,
  FaJsSquare,
  FaCuttlefish,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa'
import { DiRust } from 'react-icons/di'
import { MdEmail } from 'react-icons/md'

import Layout from '../components/Layout'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Home = () => {
  const { name, email } = useSiteMetadata()

  return (
    <Layout>
      <h1>Heading 1</h1>
      Hello wolrd
    </Layout>
  )
}

export default Home
