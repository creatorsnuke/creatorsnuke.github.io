import React, {useState, createContext} from 'react'
import { state } from '@Context/TerminalContext/state'
import { initialState } from '@Context/TerminalContext/Commands/initialState'

const status = {
  success: '#8dd39e',
  error: '#d7566a'
}

export const TerminalContext = createContext({
  terminalCommands: [],
  setTerminalCommands: () => {},
  executeCommand: () => {}
})

export function TerminalContextProvider (props) {
  const [terminalCommands, setTerminalCommands] = useState(state)
  const [commands, setCommands] = useState(initialState)
  const [terminal, setTerminal] = useState('TerminalModal')
  const [minimized, setMinimized] = useState(false)

  const executeCommand = (input) => {
    input = input.toLowerCase()
    
    const newCommand = {
      initial: false,
      status: status.success,
      command: input,
      output: commands[input]
    }

    const errorCommand = {
      initial: false,
      status: status.error,
      command: input,
      output: `Invalid command: ${input}`
    }

    if (['clear', 'clrscr', 'cls'].includes(input)) {
      return setTerminalCommands([])
    } else if (['exit', 'closed'].includes(input)) {
      return setTerminalCommands([]), setTerminal(null)
    }
    
    if (!Object.prototype.hasOwnProperty.call(commands, input)) {
      return setTerminalCommands([
        ...terminalCommands, errorCommand
      ])
    } else {
      return setTerminalCommands([
        ...terminalCommands, newCommand
      ])
    }
  }

  return(
    <TerminalContext.Provider 
      value={{ 
        terminalCommands, 
        setTerminalCommands, 
        executeCommand, 
        terminal, 
        setTerminal,
        setCommands,
        minimized,
        setMinimized
      }}>
      {props.children}
    </TerminalContext.Provider>
  )
}
