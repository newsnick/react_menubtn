import React from 'react'

const Link = ({ href, children }) => {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </div>
  )
}

export default Link
