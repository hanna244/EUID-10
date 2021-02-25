import './App.css'
import logo from './logo.svg'
import Message from './components/Message/index'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message />
      </header>
    </div>
  )
}

export default App
