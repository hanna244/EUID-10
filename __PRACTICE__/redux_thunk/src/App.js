import logo from './assets/logo.svg'
import './App.sass'
import { Route } from 'react-router-dom'
import { Home } from './pages'
import { Header } from './container'

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </Header>
      <Route path="/" exact>
        <Home />
      </Route>
    </div>
  )
}

export default App
