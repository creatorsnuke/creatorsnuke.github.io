import React, { useContext } from 'react'
import { Terminal } from '@Components/Terminal'
import { Slide } from '@Components/Slide'
import { TerminalIcon } from '@Components/TerminalIcon'
import { TerminalContext } from '@Context/TerminalContext'

export const TerminalManager = () => {
  const { terminal, setTerminal, slideData } = useContext(TerminalContext)
  const closeTerminal = () => setTerminal(null)

  if (terminal) {
    return <Terminal closeTerminal={closeTerminal} />
  }
  return (
    <div className="show-case">
      <TerminalIcon />
      <div className="slider">
        <div className="slider-wrapper">
          {slideData.map(data => (
            <Slide src={data.src} headline={data.headline} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
