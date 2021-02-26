import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import classNames from 'classnames'
import AppButton from './components/AppButton'

function App(props) {
  const [control, setControl] = useState(true)

  const combindClassNames = classNames('App-logo', '')

  const controlText = () => (!control ? '실행' : '정지')

  const animationStateChange = () => {
    setControl(!control)
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

// 컴포넌트 내부가 아닌 외부에 작성해야 한다.
// 왜? connect() 함수를 사용해서 store의 state를 받아와서 props를 전달하기 때문이다.
const mapStateToProps = (state) => ({
  animationClass: state.animationClass,
})

const mapDispatchToProps = () => {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
