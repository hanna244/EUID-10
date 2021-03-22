import React from 'react'
import { useSpring, animated } from 'react-spring'
import logo from './logo.svg'
import './App.css'
import { ToggleButton } from './ToggleButton/ToggleButton'

function App() {
  const [toggle, setToggle] = React.useState(false)
  const showLogo = useSpring({
    opacity: toggle ? 1 : 0,
  })

  const innerHtmlNumber = useSpring({
    number: 3,
    from: { number: 0 },
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
        <animated.span>{innerHtmlNumber.number}</animated.span>
        <ToggleButton handle={() => setToggle(!toggle)} />
      </header>
    </div>
  )
}

export default App
