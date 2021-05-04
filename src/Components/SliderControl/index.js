import React, { useContext } from 'react'
import { SlideContext } from '@Context/SlideContext'

export const SliderControl = ({ current, prevSlide, nextSlide }) => {
  const { slides } = useContext(SlideContext)

  return (
    <nav className="nav_arrows">
      <button className="prev" aria-label="Prev" onClick={prevSlide}></button>
      <div className="counter">
        <span>{current}</span>
        <span>{slides.length}</span>
      </div>
      <button className="next" aria-label="Next" onClick={nextSlide}></button>
    </nav>
  )
}
