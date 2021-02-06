import React, { Component } from 'react'
import Lecture from './Lecture'

export default class Lecturer extends Component {
  render() {
    return (
      <ul className="lecturers">
        {this.props.instructor.map((lecturer) => (
          <Lecture key={lecturer.id} lecturer={lecturer} />
        ))}
      </ul>
    )
  }
}
