import React, { useContext } from 'react'
import { TerminalContext } from '@Context/TerminalContext'
import { Terminal } from '@Components/Terminal'
import { TerminalIcon } from '@Components/TerminalIcon'

import { SlideContextProvider } from '@Context/SlideContext'
import { Slider } from '@Components/Slider'

export const TerminalManager = () => {
  const { terminal, setTerminal } = useContext(TerminalContext)
  const closeTerminal = () => setTerminal(null)

  if (terminal) {
    return <Terminal closeTerminal={closeTerminal} />
  }
  return (
    <SlideContextProvider>
      <div className="show-case">
        <TerminalIcon />
        <Slider heading='Example Slider' />
      </div>
    </SlideContextProvider>
  )
}
