import React, { Component } from 'react'
import LectureContext from '../context/LectureContext'
import Lecturers from '../Components/Lecturers'

export class AppMain extends Component {
  static contextType = LectureContext
  render() {
    const { lecturers } = this.context
    return (
      <main className="app-main">
        <h1 className="a11y-hidden">앱 메인 콘텐츠</h1>
        <Lecturers instructor={lecturers} />
      </main>
    )
  }
}

export default AppMain
