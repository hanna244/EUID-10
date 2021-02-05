import React from 'react'
import ReactDOM from 'react-dom'

const bindingContents = {
  number: 909,
  string: '콘텐츠 바인딩',
  howCanIuseJSexpressionInsideJSX() {
    return 'JavaScript 식(Expression)은 항상 값을 반환함으로 {}안에 바인딩이 가능하다'
  },
}

const app = (
  <div className="app">
    {bindingContents.number + 1} {`${bindingContents.string} hi!!`}
    <div>{bindingContents.howCanIuseJSexpressionInsideJSX()}</div>
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
