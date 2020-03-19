import React from 'react'
import { TitleBar } from '@Components/Terminal/TitleBar'
import { Window } from '@Components/Terminal/Window'

export const Terminal = (props) => {
  return (
    <div className='container'>
      <div className='terminalStyle'>
        <TitleBar closeTerminal={props.closeTerminal} title='jessie@creatorsnuke: ~' />
        <Window />
      </div>
    </div>
  )
}
