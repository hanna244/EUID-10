import React from 'react'
import LectureContext from '../context/LectureContext'

const Lecture = ({ lecturer, children }) => (
  <LectureContext.Consumer>
    {/* // App에서 Props를 객체로 내보냈기 때문에 객체로 받아오기  */}
    {({ removeLecture }) => {
      return (
        <li className="lecturers">
          <a href={lecturer.facebook} rel="noreferer nopener">
            {children}
          </a>
          <button type="button" onClick={() => removeLecture(lecturer.id)}>
            제거
          </button>
        </li>
      )
    }}
  </LectureContext.Consumer>
)

export default Lecture
