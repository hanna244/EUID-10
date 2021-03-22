import { useSpring, animated } from 'react-spring'
import logo from './logo.svg'
import './App.css'

function App() {
  const showLogo = useSpring({
    opacity: 1,
    from: { opacity: 0 },
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
      </header>
    </div>
  )
}

export default App
