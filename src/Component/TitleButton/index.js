import React from 'react'

export function TitleButton (props) {

  return (
    <div className={`titleBtn ${props.color === 'red' ? 'red' : props.color === 'yellow' ? 'yellow' : props.color === 'green' ? 'green' : null}`} onClick={props.closeTerminal}></div>
  )
}
