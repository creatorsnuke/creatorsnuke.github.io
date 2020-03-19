import React, { useContext } from 'react'
import { TerminalContext } from '@Context/TerminalContext'

export const OreWaDesu = (props) => {
  const { terminal, setTerminal } = useContext(TerminalContext)

  const openTerminal = () => {
    if (!terminal) {
      setTerminal('TerminalModal')
    } else {
      setTerminal(null)
    }
  }

  return (
    <div className='profile-inner'>
      <div className='circleButton' onClick={openTerminal}></div>
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
    </div>
  )
}
