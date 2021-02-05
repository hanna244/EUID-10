import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const numbers = [500, 50, 5, 0.5]

const app = (
  <div className="app">
    <h1>리스트 렌더링</h1>
    <ul>
      {numbers.map((n, i) => (
        <li key={i}>{n * 2}</li>
      ))}
    </ul>
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
