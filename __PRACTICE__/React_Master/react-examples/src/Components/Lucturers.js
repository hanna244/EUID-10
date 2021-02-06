import React, { Component } from 'react'
import Lecture from './Lecture'

export default class Lecturer extends Component {
  render() {
    return (
      <ul className="lecturers">
        {this.props.instructor.map((lecturer) => (
          <Lecture key={lecturer.id} lecturer={lecturer}>
            <figure className="lecturer-info">
              <img src={lecturer.image} alt="" className="lecturer-photo" />
              <figcaption>
                {lecturer.module} 모듈을 담당 할 {lecturer.name} 강사 Facebook
                바로가기
              </figcaption>
            </figure>
          </Lecture>
        ))}
      </ul>
    )
  }
}
