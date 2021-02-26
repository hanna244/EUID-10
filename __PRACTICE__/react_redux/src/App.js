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

  const animationStateChange = () => {
    setControl(control ? false : true)
    control
      ? store.dispatch({
          type: '로고 애니메이션 실행',
        })
      : store.dispatch({
          type: '로고 애니메이션 정지',
        })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={combindClassNames} alt="logo" />
        {!control ? (
          <AppButton
            children="애니메이션 멈추기"
            onClick={animationStateChange}
          />
        ) : (
          <AppButton
            children="애니메이션 실행하기"
            onClick={animationStateChange}
          />
        )}
      </header>
    </div>
  )
}

export default App
