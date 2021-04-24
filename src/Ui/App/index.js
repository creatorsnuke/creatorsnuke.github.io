import React from 'react'
import { TerminalContextProvider } from '@Context/TerminalContext'
import { FullPage } from '@Components/FullPage'

export function App () {
  return (
    <TerminalContextProvider>
      <FullPage />
    </TerminalContextProvider>
  )
}
