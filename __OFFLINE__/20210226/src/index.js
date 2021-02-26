import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// 스토어 불러오기
import { store } from './store'

// 실행 함수 (렌더러)
function run() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

// 실행 함수 구독
store.subscribe(run)

// run()

// 구독 중인 함수를 실행하려면?
store.dispatch({
  type: 'run 함수 초기 실행',
})
