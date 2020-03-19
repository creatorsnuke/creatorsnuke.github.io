import React from 'react'
import { Github } from '@Components/Github'
import { OreWaDesu } from '@Components/OreWaDesu'
import { TerminalContextProvider } from '@Context/TerminalContext'
import { TerminalManager } from '@Components/TerminalManager'

export function App () {
  return (
    <TerminalContextProvider>
      <main>
        <div className='content'>
          <Github name='Github' />
          <div className='profile'>
            <OreWaDesu name='Jessie Tarrosa' title='Web Developer' />
          </div>
          <div className="terminal-window">
            <TerminalManager />
          </div>
        </div>
      </main>
    </TerminalContextProvider>
  )
}
