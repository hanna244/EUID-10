import React, { Component } from 'react'
import LectureContext from './context/LectureComponent'
import Lecturers from './Components/Lecturers'
import AppHeader from './layout/AppHeader'

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
      // props 객체로 내보내기
      <LectureContext.Provider
        value={{
          lecturers: this.state.FEML_lecturers,
          removeLecture: this.removeLecture,
        }}
      >
        <div className="app" role="main" aria-labelledby="main-title">
          <AppHeader title={instructorTitle} />
          <Lecturers instructor={this.state.FEML_lecturers} />
        </div>
      </LectureContext.Provider>
    )
  }
}
