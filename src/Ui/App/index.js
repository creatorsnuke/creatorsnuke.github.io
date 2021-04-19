import React from 'react'
import { TerminalContextProvider } from '@Context/TerminalContext'
import { Banner } from '@Components/Banner'
import { TerminalManager } from '@Components/TerminalManager'

export function App () {
  return (
    <TerminalContextProvider>
      <main>
        <Banner />
        <div className="content">
          <TerminalManager />
        </div>
      </main>
    </TerminalContextProvider>
  )
}
