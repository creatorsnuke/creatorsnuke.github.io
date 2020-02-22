import React, { useState, useContext } from 'react'
import { TerminalContext } from '@Component/TerminalContext'

export function TerminalWindowPrompt ({ userInputRef }) {
  const { executeCommand } = useContext(TerminalContext)
  const [input, setInput] = useState('')

  const handlerInput = e => {
    setInput(e.target.value)
  }

  const handlerInputExecution = e => {
    if (input.length < 1) {
      return
    }

    if (e.key === 'Enter') {
      setInput('')
      executeCommand(input)
      return
    }
  }

  const WindowStyleInput = {
    display: 'flex'
  }

  const StyleInput = {
    marginRight: '0.5em',
    color: '#8dd39e'
  }

  const StyleTextArea = {
    width: '100%',
    backgroundColor: 'rgb(23,42,69)',
    borderStyle: 'none',
    color: '#b7c5d2',
    outline: 'none',
    fontFamily: 'Source Code Pro, monospace',
    caretColor: '#8dd39e'
  }

  return (
    <div style={WindowStyleInput}>
      <span style={StyleInput}>➜</span>
      <input style={StyleTextArea} value={input} onChange={handlerInput} ref={userInputRef} onKeyPress={handlerInputExecution} type='text' />
    </div>
  )
}
