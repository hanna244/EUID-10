import React, { Component } from 'react'

export default class Lecturer extends Component {
  constructor(props) {
    console.log(props)
    console.log(props.instructor)
    super(props)
  }

  render() {
    return (
      <ul className="lecturers">
        {this.props.instructor.map((lecturer) => (
          <li className="lecturers" key={lecturer.id}>
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
        ))}
      </ul>
    )
  }
}
