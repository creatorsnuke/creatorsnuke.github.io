import React, { useContext } from 'react'
import { SlideContext } from '@Context/SlideContext'
import { Slide } from '@Components/Slide'

export const Slider = () => {
  const { slides } = useContext(SlideContext)

  return (
    <ul>
      {
        slides.map(slide => (
          <Slide
            key={slide.id}
            id={Slide.id}
            headline={slide.headline}
            button={slide.button}
            src={slide.src}
            link={slide.link}
          />
        ))
      }
    </ul>
  )
}
