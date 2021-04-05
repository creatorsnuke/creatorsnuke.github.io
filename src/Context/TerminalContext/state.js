import React from 'react'
import { FaFlask } from 'react-icons/fa'

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
      <span><span style={textStyle}><FaFlask /></span> CreatorsNuke (v1.0.1) by Jessie Tarrosa
        <br/> Type&nbsp;
        <span style={status}>help</span> to see the list of commands or&nbsp;
        <span style={status}>something</span> to see the magic
      </span>
    ),
    status: '#8dd39e'
  }
]
