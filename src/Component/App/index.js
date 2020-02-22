import React from 'react'
import { Author } from '@Component/Author'
import { TitleBar } from '@Component/TitleBar'
import { TerminalWindow } from '@Component/TerminalWindow'
import { TerminalContextProvider } from '@Component/TerminalContext'

export function App () {
  return (
    <TerminalContextProvider>
      <div className='container'>
        <div className='terminalStyle'>
          <TitleBar title='jessie@creatorsnuke: ~' />
          <TerminalWindow />
        </div>
        <Author />
      </div>
    </TerminalContextProvider>
  )
}
