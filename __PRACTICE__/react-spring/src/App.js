import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={showLogo} src={logo} className="App-logo" alt="logo" />
        <span>{props.number}</span>
      </header>
    </div>
  )
}

export default App
