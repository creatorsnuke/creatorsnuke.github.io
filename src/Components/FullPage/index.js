import React from 'react'
import { Banner } from '@Components/Banner'
import { SlideContextProvider } from '@Context/SlideContext'
// import { Slider } from '@Components/Slider'
import { TerminalManager } from '@Components/TerminalManager'
import { Stars } from '@Components/Stars'
import { Slider } from '@Components/Slider'
import '@Components/FullPage/index.scss'

export const FullPage = () => {
  return (
    <SlideContextProvider>
      <div className="main-container">
        <Stars />
        <Banner />
        <div className="section" id="content-one">
          <div className="mini-project">
            <header><h1>Mini Project</h1></header>
            <div className="cd-slider">
              <Slider />
            </div>
          </div>
        </div>
        <div className="section" id="content-two">
          <div className="show-case">
            <TerminalManager />
          </div>
        </div>
      </div>
    </SlideContextProvider>
  )
}
