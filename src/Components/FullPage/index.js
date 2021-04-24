import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

import { Banner } from '@Components/Banner'
import { TerminalManager } from '@Components/TerminalManager'

export const FullPage = () => {
  return (
    <Swiper
      direction={'vertical'}
      slidesPerView={1}
      speed={700}
      grabCursor={true}
      parallax={true}
      mousewheel={true}
    >
      <SwiperSlide>
        <Banner />
      </SwiperSlide>
      <SwiperSlide>
        <div className="content">
          <TerminalManager />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
