import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const state = {
  appClass: 'app',
}

const borderColor = 'blue'

const liStyle = { color: '#ea6666', fontWeight: 100 }

const app = (
  <div className={state.appClass}>
    <h1 className="a11y-hidden">속성 컴파일</h1>
    <ul>
      {/* 직접 스타일 추가 */}
      <li style={{ color: '#ea6666', fontWeight: 900 }}>스타일 속성(인라인)</li>
      {/* 영역 외부에서 설정한 스타일 추가 */}
      <li style={liStyle}>스타일 속성(객체)</li>
      <li className="bordered rounded">클래스 속성</li>
      <li className={`rounded bordered bordered-${borderColor}`}>
        클래스 속성(동적 처리)
      </li>
    </ul>
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
