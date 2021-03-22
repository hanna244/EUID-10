import React from 'react'
import { useSpring, animated } from 'react-spring'
import logo from './logo.svg'
import './App.css'
import { ToggleButton } from './ToggleButton/ToggleButton'

function App() {
  const [toggle, setToggle] = React.useState(true)
  const showLogo = useSpring({
    opacity: toggle ? 1 : 0,
  })

  /* innerHtmlNumber ----------- */
  // const innerHtmlNumber = useSpring({
  //   to: { number: 3 },
  //   from: { number: 0 },
  // })

  // const props = useSpring({
  //   to: { opacity: 1, color: '#fff' },
  //   from: { color: '#73e77f' },
  //   delay: 1000,
  // })

  /* 사용자 정의 useSpring --------------------------------------------------------- */

  /* 방법 1 ----------- */

  // const props = useSpring({
  //   to: async (next, cancel) => {
  //     await next({ opacity: 1, color: '#ffaaee' })
  //     await next({ opacity: 0.5, color: '#73e77f' })
  //     await next({ opacity: 0, color: '#fbea2a' })
  //   },
  //   from: { opacity: 0, color: 'red' },
  // })

  /* 방법 1 ----------- */
  const props = useSpring({
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0.5, color: '#73e77f' },
      { opacity: 0, color: '#fbea2a' },
    ],
    from: { opacity: 0, color: 'red' },
  })

  return (
    <div className="App">
      <header className="App-header">
        <animated.img
          style={showLogo}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <br />
        {/* <animated.span style={props}>{innerHtmlNumber.number}</animated.span> */}
        <animated.span style={props}>안녕하세요!</animated.span>
        <br />
        <ToggleButton handle={() => setToggle(!toggle)} />
      </header>
    </div>
  )
}

export default App
