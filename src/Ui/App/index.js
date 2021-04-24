import React from 'react'
import { TerminalContextProvider } from '@Context/TerminalContext'
// import { Banner } from '@Components/Banner'
// import { TerminalManager } from '@Components/TerminalManager'
import { FullPage } from '@Components/FullPage'

export function App () {
  return (
    <TerminalContextProvider>
      <FullPage />
    </TerminalContextProvider>
  )
}
