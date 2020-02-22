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

  const executeCommand = (input) => {
    input = input.toLowerCase()
    
    const newCommand = {
      initial: true,
      command: input,
      output: commands[input]
    }
    
    if (commands.hasOwnProperty(input)) {
      return setTerminalCommands([
        ...terminalCommands, newCommand
      ])
    }

    if (input === 'cls' || input === 'clear') {
      return setTerminalCommands([])
    }
  }

  return(
    <TerminalContext.Provider value={{ terminalCommands, setTerminalCommands, executeCommand }}>
      {props.children}
    </TerminalContext.Provider>
  )
}
