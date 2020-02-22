import React from 'react'

export function TitleButton ({ color }) {

  return (
    <div className={`titleBtn ${color === 'red' ? 'red' : color === 'yellow' ? 'yellow' : color === 'green' ? 'green' : null}`}></div>
  )
}