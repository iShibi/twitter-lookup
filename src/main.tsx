import './index.css'
import { App } from './App'
import { render } from 'react-dom'
import { StrictMode } from 'react'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
