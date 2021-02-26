import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store/store'

function run() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

store.subscribe(run)

store.dispatch({
  type: '로고 애니메이션 실행',
})
