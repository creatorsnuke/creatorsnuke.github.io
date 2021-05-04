import React, { Fragment, useContext, useEffect } from 'react'
import { TerminalContext } from '@Context/TerminalContext'
import { Terminal } from '@Components/Terminal'
import { TerminalIcon } from '@Components/TerminalIcon'
import { Bazinga } from '@Components/Bazinga'
import '@Components/TerminalManager/index.scss'

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
    <div className="show-case">
      <TerminalIcon />
      <h1 className="text">Hello There</h1>
    </div>
  )
}
