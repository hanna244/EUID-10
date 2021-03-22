import { useSpring, animated } from 'react-spring'
import logo from './logo.svg'
import './App.css'

function App() {
  const showLogo = useSpring({
    opacity: 1,
    from: { opacity: 0 },
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
      </header>
    </div>
  )
}

export default App
