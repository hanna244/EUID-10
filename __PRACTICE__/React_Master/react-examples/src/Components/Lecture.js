import React, { Component } from 'react'
import LectureContext from '../context/LectureContext'

class Lecture extends Component {
  static contextType = LectureContext
  render() {
    const { lecturer, children } = this.props
    const { removeLecture } = this.context

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
  }
}

export default Lecture
