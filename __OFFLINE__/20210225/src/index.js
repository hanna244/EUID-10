import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/store'

import App from './App'

// 앱을 렌더링 하는 함수
function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

// 앱 렌더링 (1회)
render()

// render를 구독 설정
store.subscribe(render)
