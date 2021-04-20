import React, { createRef } from 'react'

export const Slide = ({ current, sideSlide, id, headline, button, src, link }) => {

  const slide = createRef()
  
  const handleMouseLeave = e => {
    const el = slide.current
    const r = el.getBoundingClientRect()

    el.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
  }

  const handleMouseMove = () => {
    slide.current.style.setProperty('--x', 0)
    slide.current.style.setProperty('--y', 0)
  }

  const imageLoaded = e => {
    e.target.style.opacity = 1
  }

  let classNames = 'slide'
  if (current === id) {
    classNames += ' slide--current'
  } else if (current - 1 === id) {
    classNames += ' slide--previous'
  } else if (current + 1 === id) {
    classNames += ' slide--next'
  }

  return (
    <div
      className={classNames}
      ref={slide}
      onClick={() => sideSlide(id)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          src={src}
          alt={headline}
          onLoad={imageLoaded}
        />
      </div>
      <div className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
        <a href={link} target='_blank' rel='noopener noreferrer' className="slide__action btn">{button}</a>
      </div>
    </div>
  )
}
