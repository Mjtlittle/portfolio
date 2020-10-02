import React from 'react'

const Row = ({ children, className }) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'flex-start',
      }}
    >
      {children}
    </div>
  )
}

export default Row
