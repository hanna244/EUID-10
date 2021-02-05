import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 목록 또는 단락을 조건부 렌더링 하기 위한 조건 상태
let usingList = true
let usingBorderColor = true

const app = (
  <div className="app">
    <h1>조건부 렌더링</h1>
    {/* JSX 내부의 주석 처리 */}
    {/* 조건에 따라 목록을 렌더링 */}
    {usingList ? (
      <ul>
        <li>조건 문 활용</li>
        <li
          className={`bordered ${
            usingBorderColor ? 'bordered-red' : ''
          }`.trim()}
        >
          조건 식 (3항식, 논리곱/합 연산자) 활용
        </li>
      </ul>
    ) : (
      <p>"조건 문 활용" 또는 "조건 식 (3항식, 논리곱/합 연산자) 활용"</p>
    )}
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
