import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './ProjectCard.module.sass'
import TagStrip from '../TagStrip'

const ProjectCard = ({ fluid, title, description, tags, to }) => {
  console.log(tags)
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Img className={styles.image} fluid={fluid} />
      </div>
      <div className={styles.info}>
        <Link to={to}>
          <h3>{title}</h3>
        </Link>
        <TagStrip tags={tags} />
        <p>{description}</p>
      </div>
    </div>
  )
}

ProjectCard.defaultProps = {
  title: 'Example Project',
  description: 'This is an example project that does not link to anything',
  to: 'https://www.google.com',
  tags: ['hello', 'world', 'this', 'is', 'josh'],
  fluid: {},
}

export default ProjectCard
