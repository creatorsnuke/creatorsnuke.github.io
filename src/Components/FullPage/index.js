import React from 'react'
import { Banner } from '@Components/Banner'
// import { SlideContextProvider } from '@Context/SlideContext'
// import { Slider } from '@Components/Slider'
import { TerminalManager } from '@Components/TerminalManager'
import { Stars } from '@Components/Stars'
import '@Components/FullPage/index.scss'

export const FullPage = () => {
  return (
    <div className="main-container">
      <Stars />
      <Banner />
      <div className="content" id="content-one">
        <div className="mini-project">
          <header><h1>Mini Project</h1></header>
        </div>
      </div>
      <div className="content" id="content-two">
        <div className="show-case">
          <TerminalManager />
        </div>
      </div>
    </div>
  )
}
