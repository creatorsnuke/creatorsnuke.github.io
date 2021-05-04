import React from 'react'

export const Slide = ({ current, id, headline, button, src, link }) => {

  const imageStyle = {
    backgroundImage: `url(${src})`
  }

  let classNames = ''
  if (current === id) {
    classNames = 'current'
  } else if (current - 1 === id) {
    classNames = 'prev_slide'
  } else if (current + 1 === id) {
    classNames = ''
  }

  return (
    <li className={classNames}>
      <div className="image" style={imageStyle}></div>
      <div className="content">
        <h2>{headline}</h2>
        <a href={link}>{button}</a>
      </div>
    </li>
  )
}
