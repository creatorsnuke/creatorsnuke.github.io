import React from 'react'

export const Slide = ({ headline, button, src, link }) => {

  const imageStyle = {
    backgroundImage: `url(${src})`
  }

  return (
    <li>
      <div className="image" style={imageStyle}></div>
      <div className="content">
        <h2>{headline}</h2>
        <a href={link}>{button}</a>
      </div>
    </li>
  )
}
