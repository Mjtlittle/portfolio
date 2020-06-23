import React from 'react'

import styles from './CallingCard.module.sass'

const CallingCard = ({ src, label }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={src} alt={label} />
      <p>{label}</p>
    </div>
  )
}

CallingCard.defaultProps = {
  src: 'https://unsplash.com/photos/p7NCXB-I-0U/download?force=true&w=640',
  label: 'Example\nText',
}

export default CallingCard
