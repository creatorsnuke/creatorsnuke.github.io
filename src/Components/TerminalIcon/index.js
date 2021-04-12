import React, { useContext } from 'react'
import { TerminalContext } from '@Context/TerminalContext'

export const TerminalIcon = () => {
  const { terminal, setTerminal, setTerminalCommands} = useContext(TerminalContext)

  const openTerminal = () => {
    if(!terminal) {
      setTerminal('TerminalModal')
    } else {
      return setTerminalCommands([]), setTerminal(null)
    }
  }

  return (
    <div className='terminal-icon' onClick={openTerminal}></div>
  )
}
