import React from 'react'

export function Slide ({ src, headline}) {
  return (
    <div className="slide">
      <div className="slide-image-wrapper">
        <img className="slide-image" src={src} alt={headline} />
      </div>
    </div>
  )
}
