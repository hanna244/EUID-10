import './App.scss'
import React from 'react'
import AppHeader from '../components/AppHeader/AppHeader'
import AppMain from '../components/AppMain/AppMain'
import GoToTop from '../components/GoToTop/GoToTop'

const App = (props) => (
  <div className="App">
    <AppHeader />
    <AppMain />
    <GoToTop />
  </div>
)

export default App
