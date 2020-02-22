import React, { createRef, useContext } from 'react'
import { TerminalWindowOutput } from '@Component/TerminalWindowOutput'
import { TerminalWindowPrompt } from '@Component/TerminalWindowPrompt'
import { TerminalContext } from '@Component/TerminalContext'

export function TerminalWindow () {
  const { terminalCommands } = useContext(TerminalContext)
  const userInputRef = createRef()
  const textAreaFocus = () => userInputRef.current.focus()
  
  return (
    <div className='terminalWindow' onClick={textAreaFocus}>
      { terminalCommands.map((input, index) => (
        <TerminalWindowOutput command={input.command} output={input.output} initial={input.initial} key={index} />
      ))}
      <TerminalWindowPrompt userInputRef={userInputRef} />
    </div>
  )
}
