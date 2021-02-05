import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 조건부 처리할 함수
function conditionaRendering(count = 0) {
  // 조건문 switch
  switch (count) {
    case 1:
      return (
        <ul>
          <li>조건 문 사용</li>
          <li>조건 식 (3항식, 논리곱/합 연산자) 활용</li>
        </ul>
      )
      break
    case 2:
      return <p>"조건 문 활용" 또는 "조건 식 (3항식, 논리곱/합 연산자) 활용"</p>
      break
    default:
      return (
        <p>
          React의 <abbr title="JavaScript Syntax eXtension">JSX</abbr>는
          JavaScript 객체(React 요소)를 반환합니다.
        </p>
      )
  }
}

// 숫자를 전달하면 항상 0, 1, 2 중에 하나인 값을 반환하도록 만든다.
function randomCount(number) {
  return number % 3
}

const app = (
  <div className="app">
    <h1>조건부 렌더링</h1>
    {/* 1-100 중에서 랜덤으로 반환된 실수를 정수로 바꾼다.  */}
    {conditionaRendering(randomCount(Math.floor(100 * Math.random())))}
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
