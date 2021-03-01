import { app } from './App.module.scss'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from 'pages/Home'

/* -------------------------------------------------------------------------- */

function App() {
  return (
    <div className={app}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
