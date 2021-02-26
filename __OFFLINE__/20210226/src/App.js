import './App.css'
import logo from './logo.svg'
import React from 'react'
import classNames from 'classnames'
import AppButton from './AppButton'
import { connect } from 'react-redux'
import {
  playLogoAnimation,
  stopLogoAnimation,
} from './store/slices/logoAnimationSlice'

const mapStateToProps = (state) => ({
  animationClass: state.animationClass,
})

const mapDispatchToProps = {
  playLogo: playLogoAnimation,
  stopLogo: stopLogoAnimation,
}

/* -------------------------------------------------------------------------- */

function App({ animationClass, playLogo, stopLogo, ...restProps }) {
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
