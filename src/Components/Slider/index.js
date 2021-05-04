import React, { Fragment, useContext } from 'react'
import { SlideContext } from '@Context/SlideContext'
import { Slide } from '@Components/Slide'
import { SliderControl } from '@Components/SliderControl'

export const Slider = () => {
  const { slides, current, prevSlide, nextSlide } = useContext(SlideContext)

  return (
    <Fragment>
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
              current={current}
            />
          ))
        }
      </ul>
      <SliderControl current={current} prevSlide={prevSlide} nextSlide={nextSlide} />
    </Fragment>
  )
}
