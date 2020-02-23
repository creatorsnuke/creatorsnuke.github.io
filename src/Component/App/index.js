import React from 'react'
import { Author } from '@Component/Author'
import { OpenTerminal } from '@Component/OpenTerminal'
import { TerminalContextProvider } from '@Component/TerminalContext'
import { TerminalManager } from '@Component/TerminalManager'

export function App () {
  return (
    <TerminalContextProvider>
      <div className='content'>
        <Author />
        <TerminalManager />
        <OpenTerminal />
      </div>
    </TerminalContextProvider>
  )
}
