import './App.css'
import logo from './logo.svg'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import AppButton from './AppButton'
import {
  playLogoAnimation,
  stopLogoAnimation,
} from './store/slices/logoAnimationSlice'

/* -------------------------------------------------------------------------- */

function App() {
  // 스토어에서 상태 가져오기
  const animationClass = useSelector((state) => state.animationClass)
  // 스토어 디스패치 가져오기
  const dispatch = useDispatch()

  const playLogo = (activeClassName) =>
    dispatch(playLogoAnimation(activeClassName))

  const stopLogo = () => dispatch(stopLogoAnimation())

  const [isToggled, setIsToggled] = React.useState(false)

  const combinedClassNames = classNames('App-logo', animationClass)

  const getToggedMessage = () => (isToggled ? '정지' : '실행')

  const handleToggleLogoAnimation = () => {
    setIsToggled(!isToggled)
    !isToggled ? playLogo('run-animation') : stopLogo()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={combinedClassNames} alt="logo" />
        <AppButton
          children={`로고 애니메이션 ${getToggedMessage()}`}
          onClick={handleToggleLogoAnimation}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
