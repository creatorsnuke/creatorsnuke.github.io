import React from 'react'
import { TerminalContextProvider } from '@Context/TerminalContext'
import { NavBar } from '@Components/NavBar'
import { Banner } from '@Components/Banner'
import { OreWaDesu } from '@Components/OreWaDesu'
import { TerminalManager } from '@Components/TerminalManager'
// import { Github } from '@Components/Github'
// import { TerminalIcon } from '@Components/TerminalIcon'

export function App () {
  return (
    <TerminalContextProvider>
      <main>
        <NavBar title='Oreo' />
        <Banner />
        <div className="content">
          <OreWaDesu 
            name='Jessie Tarrosa'
            job='Developer'
          />
          <TerminalManager />
        </div>
      </main>
    </TerminalContextProvider>
  )
}
