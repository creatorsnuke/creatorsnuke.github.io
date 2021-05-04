import React, { Fragment, useContext, useEffect } from 'react'
import { TerminalContext } from '@Context/TerminalContext'
import { Terminal } from '@Components/Terminal'
import { TerminalIcon } from '@Components/TerminalIcon'

import { SlideContextProvider } from '@Context/SlideContext'
// import { Slider } from '@Components/Slider'
import { Bazinga } from '@Components/Bazinga'

export const TerminalManager = () => {
  const { terminal, setTerminal, magic, setMagic } = useContext(TerminalContext)
  const closeTerminal = () => setTerminal(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMagic(null)
    }, 4000)

    return () => clearTimeout(timeout)
  }, [magic])

  if (terminal) {
    return (
      <Fragment>
        {magic === 'bazinga' ? <Bazinga /> : null}
        <Terminal closeTerminal={closeTerminal} />
      </Fragment>
    )
  }

  return (
    <SlideContextProvider>
      <div className="show-case">
        <TerminalIcon />
        {/* <Slider heading='Example Slider' /> */}
        <h1>Hello There</h1>
      </div>
    </SlideContextProvider>
  )
}
