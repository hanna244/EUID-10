import React, { Component } from 'react'

export default class Lecture extends Component {
  render() {
    // const lecturer = this.props.lecturer
    const { lecturer } = this.props
    return (
      <li className="lecturers">
        <a href={lecturer.facebook} rel="noreferer nopener">
          {this.props.children}
        </a>
      </li>
    )
  }
}
