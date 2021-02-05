import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 목록 또는 단락을 조건부 렌더링 하기 위한 조건 상태
let usingList = true
let usingBorderColor = true

const a11y = {
  hiddenClass: 'a11y-hidden',
}

const app = (
  <div className="app">
    {/* a11y.hidden과 같이 값을 가져올 수 없는 존재하지 않는 값을 가져오면 null을 반환한다.  */}
    <h1 className={a11y.hiddenClass || null}>조건부 렌더링</h1>
    {/* JSX 내부의 주석 처리 */}
    {/* 조건에 따라 목록을 렌더링 */}
    {usingList ? (
      <ul>
        <li>조건 문 활용</li>
        {/* usingBorderColor가 false일 때, 반환되는 공백 때문에 trim() 메서드 사용 */}
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
