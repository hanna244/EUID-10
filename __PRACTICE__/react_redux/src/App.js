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
  const [number, setNumber] = useState(null)

  const combindClassNames = classNames('App-logo', animationClass)

  const controlText = () => (!control ? '정지' : '실행')

  const animationStateChange = () => {
    setControl(!control)
    control ? playLogo('run-animation') : stopLogo()
  }

  const decrease = () => {
    setNumber(number - 1)
  }
  const increase = () => {
    setNumber(number + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={combindClassNames} alt="logo" />
        <AppButton
          children={`로고 애니메이션 ${controlText()}`}
          onClick={animationStateChange}
        />
        <AppButton children="-" onClick={decrease} />
        <p>{number ?? 0}</p>
        <AppButton children="+" onClick={increase} />
      </header>
    </div>
  )
}

export default App
