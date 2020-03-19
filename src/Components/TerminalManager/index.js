import React, { useContext } from 'react'
import { TerminalModal } from '@Component/TerminalModal'
import { TerminalContext } from '@Component/TerminalContext'

export const TerminalManager = () => {
  const { terminal, setTerminal } = useContext(TerminalContext)
  const closeTerminal = () => setTerminal(null)

  if (terminal) {
    return <TerminalModal closeTerminal={closeTerminal} />
  }
  return null
}
