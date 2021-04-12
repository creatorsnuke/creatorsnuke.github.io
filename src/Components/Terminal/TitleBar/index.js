import React, { useContext } from 'react'
import { TitleButton } from '@Components/Terminal/TitleBar/TitleButton'
import { TerminalContext } from '@Context/TerminalContext'

export function TitleBar (props) {
  const { minimized, setMinimized } = useContext(TerminalContext)

  const minimizedTerminal = () => {
    if (!minimized) {
      setMinimized(true)
      return 'minimized'
    }
  }

  return (
    <div className='titleBar'>
      <div className='titleButton'>
        <TitleButton closeTerminal={props.closeTerminal} color='red' />
        <TitleButton color='yellow' />
        <TitleButton color='green' minimizedTerminal={minimizedTerminal} />
      </div>
      <div className='titleTitle'>
        <span>{props.title}</span>
      </div>
      <div className="titleRemark">
        <TitleButton />
        <TitleButton />
        <TitleButton />
      </div>
    </div>
  )
}
