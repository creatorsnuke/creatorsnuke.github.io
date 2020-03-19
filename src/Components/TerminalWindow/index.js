import React, { createRef, useContext, useEffect } from 'react'
import { TerminalWindowOutput } from '@Component/TerminalWindowOutput'
import { TerminalWindowPrompt } from '@Component/TerminalWindowPrompt'
import { TerminalContext } from '@Component/TerminalContext'

export function TerminalWindow () {
  const { terminalCommands } = useContext(TerminalContext)
  const userInputRef = createRef()
  const textAreaFocus = () => userInputRef.current.focus()

  useEffect(() => {
    const terminalWindow = document.getElementById('terminalWindow')

    terminalWindow.scrollTop = terminalWindow.scrollHeight
  })
  
  return (
    <div id='terminalWindow' className='terminalWindow' onClick={textAreaFocus}>
      { terminalCommands.map((input, index) => (
        <TerminalWindowOutput command={input.command} output={input.output} initial={input.initial} key={index} />
      ))}
      <TerminalWindowPrompt userInputRef={userInputRef} />
    </div>
  )
}
