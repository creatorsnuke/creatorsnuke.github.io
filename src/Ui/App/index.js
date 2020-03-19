import React from 'react'
import { Author } from '@Component/Author'
import { OpenTerminal } from '@Components/OpenTerminal'
import { TerminalContextProvider } from '@Components/TerminalContext'
import { TerminalManager } from '@Components/TerminalManager'

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
