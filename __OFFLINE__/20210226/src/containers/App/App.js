import './App.css'
import logo from '../../assets/logo.svg'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import AppButton from '../../components/AppButton/AppButton'
import Counter from '../../components/Counter/Counter'
import ManageList from '../../components/ManageList/ManageList'

import {
  playLogoAnimation,
  stopLogoAnimation,
} from '../../store/slices/logoAnimationSlice'

import { increment, decrement } from '../../store/slices/countSlice'

/* -------------------------------------------------------------------------- */
function App() {
  // 스토어에서 상태 가져오기
  const { animationClass, count } = useSelector(({ logoAnim, counter }) => {
    return {
      animationClass: logoAnim.animationClass,
      count: counter.count,
    }
  })

  // 스토어 디스패치 가져오기
  const dispatch = useDispatch()

  const playLogo = (activeClassName) =>
    dispatch(playLogoAnimation(activeClassName))

  const stopLogo = () => dispatch(stopLogoAnimation())

  const incrementCount = () => dispatch(increment())
  const decrementCount = () => dispatch(decrement())

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
            onIncrement={incrementCount}
            onDecrement={decrementCount}
          >
            <Counter.Display count={count} />
          </Counter.Controls>
        </Counter>

        <ManageList />
      </header>
    </div>
  )
}

export default App
