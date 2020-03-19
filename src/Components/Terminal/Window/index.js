import React, { createRef, useContext, useEffect } from 'react'
import { Output } from '@Components/Terminal/Window/Output'
import { Prompt } from '@Components/Terminal/Window/Prompt'
import { TerminalContext } from '@Context/TerminalContext'

export function Window () {
  const { terminalCommands } = useContext(TerminalContext)
  const userInputRef = createRef()
  const textAreaFocus = () => userInputRef.current.focus()

  useEffect(() => {
    const terminalWindow = document.getElementById('terminalWindow')

    terminalWindow.scrollTop = terminalWindow.scrollHeight
  })
  
  return (
    <div 
      id='terminalWindow' 
      className='terminalWindow' 
      onClick={textAreaFocus}
    >
      { terminalCommands.map((input, index) => (
        <Output 
          status={input.status}
          command={input.command} 
          output={input.output} 
          initial={input.initial} 
          key={index} 
        />
      ))}
      <Prompt userInputRef={userInputRef} />
    </div>
  )
}
