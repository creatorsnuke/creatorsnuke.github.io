import React from 'react'

export function TitleButton (props) {

  const actionButton = () => {
    if (props.color === 'green') {
      return props.minimizedTerminal()
    } else if (props.color === 'red') {
      return props.closeTerminal()
    }
  }

  return (
    <div 
      className={`titleBtn ${props.color === 'red' ? 'red' 
        : props.color === 'yellow' ? 'yellow' 
        : props.color === 'green' ? 'green' : null}`} 
      onClick={actionButton}
    >
    </div>
  )
}
