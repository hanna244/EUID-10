import React, { Component } from 'react'

export default class Lecture extends Component {
  render() {
    // const lecturer = this.props.lecturer
    const { lecturer } = this.props
    return (
      <li className="lecturers">
        <a href={lecturer.facebook} rel="noreferer nopener">
          <figure className="lecturer-info">
            <img src={lecturer.image} alt="" className="lecturer-photo" />
            <figcaption>
              {lecturer.module} 모듈을 담당 할 {lecturer.name} 강사 Facebook
              바로가기
            </figcaption>
          </figure>
        </a>
      </li>
    )
  }
}
