import React from 'react'
import { TitleButton } from '@Component/TitleButton'

export function TitleBar ({ title }) {

  return (
    <div className='titleBar'>
      <div className='titleButton'>
        <TitleButton color='red' />
        <TitleButton color='yellow' />
        <TitleButton color='green' />
      </div>
      <div className='titleTitle'>
        <span>{title}</span>
      </div>
      <div className="titleRemark"></div>
    </div>
  )
}