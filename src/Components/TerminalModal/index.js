import React from 'react'
import { TitleBar } from '@Component/TitleBar'
import { TerminalWindow } from '@Component/TerminalWindow'

export const TerminalModal = (props) => {
  return (
    <div className='container'>
      <div className='terminalStyle'>
        <TitleBar closeTerminal={props.closeTerminal} title='jessie@creatorsnuke: ~' />
        <TerminalWindow />
      </div>
    </div>
  )
}
