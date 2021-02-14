import React from 'react'
import LectureContext from '../context/LectureContext'
import Lecturers from '../Components/Lecturers'

export const AppMain = () => {
  return (
    <main className="app-main">
      <h1 className="a11y-hidden">앱 메인 콘텐츠</h1>
      <LectureContext.Consumer>
        {({ lecturers }) => <Lecturers instructor={lecturers} />}
      </LectureContext.Consumer>
    </main>
  )
}

export default AppMain
