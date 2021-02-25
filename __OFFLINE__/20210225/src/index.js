import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from './patterns/store'

import App from './App'

/* -------------------------------------------------------------------------- */

const storeReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(storeReducer, {
  name: '한나',
  age: 25,
  mentor: '야무',
})

// store 객체의 조건
console.log(store)

/* -------------------------------------------------------------------------- */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
