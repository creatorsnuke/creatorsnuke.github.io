import React, { useContext } from 'react'
import { TerminalContext } from '@Component/TerminalContext'

export const OpenTerminal = () => {
  const { setTerminal } = useContext(TerminalContext)

  const openTerminal = () => setTerminal('TerminalModal')

  return (
    <div className='profile-inner'>
      <div className='circleButton' onClick={openTerminal}></div>
      <h1>Jessie Tarrosa</h1>
      <h2>Web Developer</h2>
    </div>
  )
}
