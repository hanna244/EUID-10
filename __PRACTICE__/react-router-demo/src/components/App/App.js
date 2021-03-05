import './App.scss'
import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom'
import { Home } from '../../pages/Home'
import { Login } from '~/pages/Login'
import { Signup } from '../../pages/Signup'

const App = () => {
  return (
    <Router className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: '/login',
                state: {
                  massage: '로그인 페이지',
                },
              }}
            >
              로그인
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup">회원가입</NavLink>
          </li>
        </ul>
      </nav>
      <h1>리액트 라우터 실습하기</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  )
}

export default App
