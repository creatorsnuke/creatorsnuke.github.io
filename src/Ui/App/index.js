import React from 'react'
import { TerminalContextProvider } from '@Context/TerminalContext'
import { NavBar } from '@Components/NavBar'
import { Banner } from '@Components/Banner'
import { OreWaDesu } from '@Components/OreWaDesu'
// import { Github } from '@Components/Github'
// import { TerminalIcon } from '@Components/TerminalIcon'
// import { TerminalManager } from '@Components/TerminalManager'

export function App () {
  return (
    <TerminalContextProvider>
      <main>
        <NavBar title='Oreo' />
        <Banner />
        <OreWaDesu 
          name='Jessie Tarrosa'
          job='Frontend Developer'
        />
      </main>
    </TerminalContextProvider>
  )
}
