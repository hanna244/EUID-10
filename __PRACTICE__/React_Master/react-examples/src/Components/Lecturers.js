import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import Lecture from './Lecture'

class Lecturer extends Component {
  static propTypes = {
    instructor: PropsTypes.array,
  }

  static defaultProps = {
    instructor: [],
  }

  handleClickButton = () => {
    console.log('부모 컴포넌트 콜백 함수 실행 성공!')
  }

  render() {
    return (
      <ul className="lecturers">
        {this.props.instructor.map((lecturer) => (
          <Lecture
            key={lecturer.id}
            lecturer={lecturer}
            parentComponentClick={this.handleClickButton}
          >
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

export default Lecturer
