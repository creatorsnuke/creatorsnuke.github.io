import React, { useContext } from 'react'
import { SlideContext } from '@Context/SlideContext'
import { Slide } from '@Components/Slide'
import { SliderControl } from '@Components/SliderControl'

export function Slider ({ heading }) {
  const { slides, current, prevSlide, nextSlide, sideSlide } = useContext(SlideContext)

  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
  const wrapperTransform = {
    'transform': `translateX(-${current * (100 / slides.length)}%)`
  }

  return (
    <div className="slider" aria-labelledby={headingId}>
      <div className="slider__wrapper" style={wrapperTransform}>
        {slides.map(slide => (
          <Slide
            key={slide.id}
            id={slide.id}
            headline={slide.headline}
            button={slide.button}
            src={slide.src}
            link={slide.link}
            current={current}
            sideSlide={sideSlide}
          />
        ))}
      </div>

      <div className="slider__controls">
        <SliderControl
          type='previous'
          title='Go to previous slide'
          handleClick={prevSlide}
        />
        <SliderControl
          type='next'
          title='Go to next slide'
          handleClick={nextSlide}
        />
      </div>
    </div>
  )
}
