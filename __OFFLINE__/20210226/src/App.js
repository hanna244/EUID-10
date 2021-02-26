import './App.css'
import logo from './logo.svg'
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import AppButton from './AppButton'

// 스토어의 상태를 props로 매핑(mapping)
const mapStateToProps = (state) => ({
  animationClass: state.animationClass,
})

// 스토어의 액션 크리에이터 함수를 props로 매핑
const mapDispatchToProps = {
  // action creators 연결
}

function App(props) {
  console.log(props)
  const [isToggled, setIsToggled] = React.useState(false)

  const combinedClassNames = classNames('App-logo', '')

  const getToggedMessage = () => (isToggled ? '정지' : '실행')

  const handleToggleLogoAnimation = () => {
    setIsToggled(!isToggled)
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
