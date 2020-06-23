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
import Jumbotron from '../components/Jumbotron'
import CallingCard from '../components/CallingCard'
import Content from '../components/Content'
import EmailForm from '../components/EmailForm'
import styles from './index.module.sass'
import TechPill from '../components/TechPill'
import SocialIcon from '../components/SocialIcon'

import profilePicture from '../assets/images/profile.jpg'
import aboutPicture from '../assets/images/self.jpg'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Home = () => {
  const { name, email } = useSiteMetadata()

  return (
    <Layout title='Home'>
      <Jumbotron>
        <div className={styles.slogan}>
          programming
          <span>
            for
            <br />
            fun
          </span>
        </div>
        <CallingCard src={profilePicture} label={name.replace(' ', '\n')} />
      </Jumbotron>
      <Content topCurve>
        <br />
        <h2 id='about'>About</h2>

        <p>
          My name's Josh and i'm Computer Science student at Clemson University,
          I enjoy anything to do with software and design. I appreciate well
          made UI and UX, and strive to find functional and graphically
          appealing solutions.
          <img
            style={{ width: '25em', display: 'block' }}
            align='top'
            alt='profile'
            src={aboutPicture}
          />
          <a href='/cv.pdf' download>
            Download CV
          </a>
        </p>
        <hr />
        <h2>Familiar Technologies</h2>
        <p>
          Ordered by confidence from top to bottom, left to right. Projects
          using each of these technologies can be found
          <Link to='/projects'> here</Link>.
        </p>
        <div className={styles.flex_container}>
          <TechPill icon={FaPython} label='Python' />
          <TechPill icon={FaHtml5} label='HTML3' />
          <TechPill icon={FaJsSquare} label='Javascript' />
          <TechPill icon={FaCss3Alt} label='CSS3' />
          <TechPill icon={DiRust} label='Rust' />
          <TechPill icon={FaReact} label='React' />
          <TechPill icon={FaGitAlt} label='Git' />
          <TechPill icon={FaCuttlefish} label='C' />
          <TechPill icon={FaNode} label='Node' />
          <TechPill icon={FaCuttlefish} label='C++' />
          <TechPill icon={FaJava} label='Java' />
        </div>
        <hr />
        <h2 id='contact'>Contact Me</h2>
        <p>You can reach me via any of these methods</p>
        <div className={styles.flex_container}>
          <SocialIcon icon={MdEmail} href={`mailto:${email}`} />
          <SocialIcon icon={FaGithub} href='https://github.com/Mjtlittle' />
          <SocialIcon icon={FaTwitter} href='https://twitter.com/mjtlittle' />
        </div>
        <h2>Send an Email</h2>
        <EmailForm />
      </Content>
    </Layout>
  )
}

export default Home
