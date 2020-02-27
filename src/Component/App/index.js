import React from 'react'
import { Author } from '@Component/Author'
import { OpenTerminal } from '@Component/OpenTerminal'
import { TerminalContextProvider } from '@Component/TerminalContext'
import { TerminalManager } from '@Component/TerminalManager'

export function App () {
  return (
    <TerminalContextProvider>
      <main>
        <div className='content'>
          <Author />
          <div className='profile'>
            <OpenTerminal />
          </div>
          <div className="terminal-window">
            <TerminalManager />
          </div>
        </div>
      </main>
    </TerminalContextProvider>
  )
}
