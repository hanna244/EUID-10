import React, { Component } from 'react'

export default class Lecture extends Component {
  render() {
    // const lecturer = this.props.lecturer
    const { lecturer, children } = this.props
    return (
      <li className="lecturers">
        <a href={lecturer.facebook} rel="noreferer nopener">
          {children}
        </a>
      </li>
    )
  }

  componentWillUnmount() {
    console.log('Lecture 컴포넌트 제거', this.props.lecturer.name)
  }
}
