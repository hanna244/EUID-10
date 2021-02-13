import React, { Component, createContext } from 'react'
import Lecturers from './Components/Lecturers'

export var AppContext = createContext(() => {})

export default class App extends Component {
  state = {
    FEML_lecturers: [
      {
        id: 'lecturer-az081871',
        name: '김데레사',
        module: 'A',
        facebook: 'http://facebook.com/seulbinim',
      },
      {
        id: 'lecturer-az081872',
        name: '야무',
        module: 'B, C',
        facebook: 'http://facebook.com/yamoo9',
      },
    ],
  }

  linkStyle = { color: '#3c4bab', textDecoration: 'none' }

  removeLecture = (removeId) => {
    const filteredLecturers = this.state.FEML_lecturers.filter(
      (lecture) => lecture.id !== removeId
    )
    this.setState({
      FEML_lecturers: filteredLecturers,
    })
  }

  render() {
    const instructorTitle = '강사진'
    return (
      // createContext에서 사용하는 Provider 또는 Consumer은 컴포넌트이다. 대문자 잊지 말기
      <AppContext.Provider value={this.removeLecture}>
        <div className="app" role="main" aria-labelledby="main-title">
          <h1 id="main-title">
            <a
              style={this.linkStyle}
              href="http://yamoo9.github.io"
              lang="en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Front-End Masters League
            </a>{' '}
            {instructorTitle}
          </h1>
          <Lecturers
            instructor={this.state.FEML_lecturers}
            handleRemoveLecturer={this.removeLecture}
          />
        </div>
      </AppContext.Provider>
    )
  }
}
