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
  const controlText = () => (!control ? '실행' : '정지')

  const animationStateChange = () => {
    setControl(!control)
    store.dispatch({
      type: `로고 애니메이션 ${controlText()}`,
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={combindClassNames} alt="logo" />
        <AppButton
          children={`로고 애니메이션 ${controlText()}`}
          onClick={animationStateChange}
        />
      </header>
    </div>
  )
}

export default App
