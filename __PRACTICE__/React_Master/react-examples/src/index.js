import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 조건부 처리할 함수
function conditionaRendering(usingList = false) {
  // 조건문 if, switch
  if (usingList) {
    return (
      <ul>
        <li>조건 문 사용</li>
        <li>조건 식 (3항식, 논리곱/합 연산자) 활용</li>
      </ul>
    )
  } else {
    return <p>"조건 문 활용" 또는 "조건 식 (3항식, 논리곱/합 연산자) 활용"</p>
  }
}

function randomBoolean() {
  return Math.random() < 0.5 ? true : false
}

const app = (
  <div className="app">
    <h1>조건부 렌더링</h1>
    {conditionaRendering(randomBoolean())}
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
