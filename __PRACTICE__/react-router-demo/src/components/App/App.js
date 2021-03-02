import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from '../Home'

const App = (props) => (
  <Router className="App">
    {/* component 속성 사용하기  */}
    <Route path="/" exact component={Home} />
  </Router>
)

export default App
