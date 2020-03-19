import React from 'react'

export function TerminalWindowOutput (props) {

  const WindowStyleOutput = {
    marginBottom: '0.5em'
  }

  const WindowStyleInput = {
    display: 'flex'
  }

  const StyleOutput = {
    marginRight: '0.5em',
    width: '100%',
    backgroundColor: 'rgb(23,42,69)',
    borderStyle: 'none',
    color: '#b7c5d2',
    outline: 'none',
    fontFamily: 'Source Code Pro, monospace'
  }

  const StyleInput = {
    marginRight: '0.5em',
    color: '#8dd39e'
  }

  const TextAreaStyle = {
    width: '100%',
    backgroundColor: 'rgb(23,42,69)',
    borderStyle: 'none',
    color: '#b7c5d2',
    outline: 'none',
    fontFamily: 'Source Code Pro, monospace'
  }

  return (
    <div style={WindowStyleOutput}>
      { props.initial === false &&
        <div style={WindowStyleInput}>
          <span style={StyleInput}>➜</span>
          <span style={TextAreaStyle}>{props.command}</span>
        </div>
      }
      <div style={WindowStyleInput}>
        <span style={StyleOutput}>{props.output}</span>
      </div>
    </div>
  )
}
