import React, {useState, createContext} from 'react'
import { state } from '@Component/TerminalContext/state'
import { initialState } from '@Component/Commands/initialState'

export const TerminalContext = createContext({
  terminalCommands: [],
  setTerminalCommands: () => {},
  executeCommand: () => {}
})

export function TerminalContextProvider (props) {
  const [terminalCommands, setTerminalCommands] = useState(state)
  const [commands, setCommands] = useState(initialState)
  const [terminal, setTerminal] = useState('TerminalModal')

  const executeCommand = (input) => {
    input = input.toLowerCase()
    
    const newCommand = {
      initial: false,
      command: input,
      output: commands[input]
    }

    const errorCommand = {
      initial: false,
      command: input,
      output: `Invalid command: ${input}`
    }

    if (input === 'cls' || input === 'clear') {
      return setTerminalCommands([])
    }
    
    if (!commands.hasOwnProperty(input)) {
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
    <TerminalContext.Provider value={{ terminalCommands, setTerminalCommands, executeCommand, terminal, setTerminal }}>
      {props.children}
    </TerminalContext.Provider>
  )
}
