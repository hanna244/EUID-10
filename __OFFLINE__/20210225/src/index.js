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

// store.subscribe() 란?
// (실행할 함수) 구독 -> 구독할 함수를 구독 목록(list, array)에 저장
// listeners = [listener1, listener2]

function sleep() {
  console.log('잠잔다')
}

function awake() {
  console.log('일어난다')
}

function goToSchool() {
  console.log('학교에 간다')
}

function draw() {
  console.log('그림을 그린다')
}

function run() {
  console.log('달린다')
}

store.subscribe(sleep)
store.subscribe(awake)
// store.subscribe(goToSchool)
store.subscribe(draw)
store.subscribe(run)

store.dispatch()

/* -------------------------------------------------------------------------- */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
