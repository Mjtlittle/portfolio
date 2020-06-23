import React, { useState, useEffect, useRef } from 'react'

import styles from './Jumbotron.module.sass'

import Simicircle from './simicircle.svg'
import Square from './square.svg'
import Zigzag from './zigzag.svg'
import Triangle from './triangle.svg'

import { randint, randchoice } from '../../utility/random.js'

const allShapes = [Square, Zigzag, Triangle, Simicircle]
const allColors = ['orange', 'green', 'blue', 'gray']

const Jumbotron = ({ children }) => {
  const [shapes, setShapes] = useState([])

  const densityRef = useRef(null)

  useEffect(() => {
    let shape_data = []

    const width = densityRef.current.offsetWidth

    const n = Math.floor(width / 50)
    for (let i = 0; i < n; i++) {
      shape_data.push({
        Icon: randchoice(allShapes),
        angle: randint(0, 8) * 45,
        color: randchoice(allColors),
        x: randint(0, 100),
        y: (i / n) * 100,
      })
    }
    setShapes(shape_data)
  }, [])

  return (
    <div className={styles.container} ref={densityRef}>
      {shapes.map(({ Icon, angle, color, x, y }) => (
        <Icon
          className={styles.icon + ' ' + styles[color]}
          style={{
            left: x + '%',
            top: y + '%',
            transform: `rotate(${angle}deg)`,
          }}
        />
      ))}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Jumbotron
