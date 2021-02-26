import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import AppButton from './components/AppButton'
import {
  playlogoanimation,
  stoplogoanimation,
} from './store/slices/logoAnimationSlice'

function App() {
  const dispatch = useDispatch()

  const animationClass = useSelector((state) => state.animationClass)
  const playLogo = (animationClass) =>
    dispatch(playlogoanimation(animationClass))
  const stopLogo = () => dispatch(stoplogoanimation())

  const [control, setControl] = useState(true)

  const combindClassNames = classNames('App-logo', animationClass)

  const controlText = () => (!control ? '정지' : '실행')

  const animationStateChange = () => {
    setControl(!control)
    control ? playLogo('run-animation') : stopLogo()
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
