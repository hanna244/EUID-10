import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const app = (
  <div className="app">
    <h1>React 앱</h1>
  </div>
)

const appHeading = React.createElement(
  'h1',
  null,
  'React.createElement() 메서드'
)

const appElement = React.createElement('div', { class: 'app' }, appHeading)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
