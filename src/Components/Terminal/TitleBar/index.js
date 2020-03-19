import React from 'react'
import { TitleButton } from '@Components/Terminal/TitleBar/TitleButton'

export function TitleBar (props) {

  return (
    <div className='titleBar'>
      <div className='titleButton'>
        <TitleButton closeTerminal={props.closeTerminal} color='red' />
        <TitleButton color='yellow' />
        <TitleButton color='green' />
      </div>
      <div className='titleTitle'>
        <span>{props.title}</span>
      </div>
      <div className="titleRemark">
        <TitleButton />
        <TitleButton />
        <TitleButton />
      </div>
    </div>
  )
}
