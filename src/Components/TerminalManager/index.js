import React, { useContext } from 'react'
import { Terminal } from '@Components/Terminal'
import { TerminalIcon } from '@Components/TerminalIcon'
import { TerminalContext } from '@Context/TerminalContext'

export const TerminalManager = () => {
  const { terminal, setTerminal } = useContext(TerminalContext)
  const closeTerminal = () => setTerminal(null)

  if (terminal) {
    return <Terminal closeTerminal={closeTerminal} />
  }
  return (
    <div className="show-case">
      <TerminalIcon />
    </div>
  )
}
