import React, { useContext } from 'react'
import { TerminalContext } from '@Component/TerminalContext'

export const OpenTerminal = () => {
  const { setTerminal } = useContext(TerminalContext)

  const openTerminal = () => setTerminal('TerminalModal')

  return (
    <div className='circleButton' onClick={openTerminal}></div>
  )
}
