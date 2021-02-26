import './App.css'
import logo from '../../assets/logo.svg'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import AppButton from '../../components/AppButton/AppButton'
import Counter from '../../components/Counter/Counter'

import {
  playLogoAnimation,
  stopLogoAnimation,
} from '../../store/slices/logoAnimationSlice'

/* -------------------------------------------------------------------------- */

function App() {
  // 스토어에서 상태 가져오기
  const { animationClass } = useSelector((state) => ({
    animationClass: state.animationClass,
  }))

  // 스토어 디스패치 가져오기
  const dispatch = useDispatch()

  const playLogo = (activeClassName) =>
    dispatch(playLogoAnimation(activeClassName))

  const stopLogo = () => dispatch(stopLogoAnimation())

  // ------------------------------------------------------------------

  const [isToggled, setIsToggled] = React.useState(animationClass)

  const combinedClassNames = classNames('App-logo', animationClass)

  const getToggedMessage = () => (isToggled ? '정지' : '실행')

  const handleToggleLogoAnimation = () => {
    setIsToggled(!isToggled)
    !isToggled ? playLogo('run-animation') : stopLogo()
  }

  // ------------------------------------------------------------------

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={combinedClassNames} alt="logo" />
        {/* 앱 버튼 로고 애니메이션 예제 */}
        <AppButton
          children={`로고 애니메이션 ${getToggedMessage()}`}
          onClick={handleToggleLogoAnimation}
        />
        {/* 카운터 컴포넌트 상태 제어 예제 */}
        <Counter>
          <Counter.Controls
            onIncrement={() => console.log('증가 ')}
            onDecrement={() => console.log('감소 ')}
          >
            <Counter.Display count={101} />
          </Counter.Controls>
        </Counter>
      </header>
    </div>
  )
}

export default App
