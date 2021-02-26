import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import store from './store/store'
import classNames from 'classnames'
import AppButton from './components/AppButton'

function App() {
  const animationClass = store.getState().animationClass
  const combindClassNames = classNames('App-logo', animationClass)

  const [control, setControl] = useState(true)

  //${!control ? '실행' : '정지'}가 중복 사용 되기 때문에 유틸리티 함수 사용
  const controlText = () => (!control ? '실행' : '정지')

  const animationStateChange = () => {
    // 3항식 사용하지 않고 부정 연산자로 토글 사용 가능
    setControl(!control)
    store.dispatch({
      // type: `로고 애니메이션 ${!control ? '실행' : '정지'}`,
      type: `로고 애니메이션 ${controlText()}`,
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={combindClassNames} alt="logo" />
        {/* 중복 되는 AppButton 컴포넌트를 두 번 사용하지 않고 아래와 같이 사용할 수 있음. */}
        <AppButton
          children={`로고 애니메이션 ${controlText()}`}
          onClick={animationStateChange}
        />
      </header>
    </div>
  )
}

export default App
