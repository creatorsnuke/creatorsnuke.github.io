import React from 'react'
import { FaVial } from 'react-icons/fa'

const status = {
  color: '#8dd39e'
}

const textStyle = {
  display: 'inline-flex',
  verticalAlign: 'middle'
}

export const state = [
  {
    initial: true,
    command: 'hello',
    output: (
      <span><span style={textStyle}><FaVial /></span> CreatorsNuke (v1.0.0) by Jessie Tarrosa
        <br/> Type something to see the magic or <span style={status}>help</span>
      </span>
    )
  }
]
