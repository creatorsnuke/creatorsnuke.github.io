import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from '@Ui/App'
import '@Style/styles.scss'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
)
