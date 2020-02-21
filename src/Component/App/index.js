import React from 'react'
import { Author } from '@Component/Author'
import { TitleBar } from '@Component/TitleBar'
import { TerminalWindow } from '@Component/TerminalWindow'

export function App () {
  return (
    <div className='container'>
      <div className='terminalStyle'>
        <TitleBar title='jessie@creatorsnuke: ~' />
        <TerminalWindow />
      </div>
      <Author />
    </div>
  )
}
