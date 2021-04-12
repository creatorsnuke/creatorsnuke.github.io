import React, { useContext } from 'react'
import { TitleBar } from '@Components/Terminal/TitleBar'
import { Window } from '@Components/Terminal/Window'
import { TerminalContext } from '@Context/TerminalContext'

export const Terminal = (props) => {
  const { minimized } = useContext(TerminalContext)

  return (
    <div className='container'>
      <div className={`terminalStyle ${minimized ? 'minimized' : null}`}>
        <TitleBar closeTerminal={props.closeTerminal} title='jessie@creatorsnuke: ~' />
        <Window />
      </div>
    </div>
  )
}
