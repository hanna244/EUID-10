import React from 'react'
import PropsTypes from 'prop-types'
import Lecture from './Lecture'

class Lecturer extends React.Component {
  static propTypes = {
    instructor: PropsTypes.array,
  }

  static defaultProps = {
    instructor: [],
  }

  render() {
    return (
      <ul className="lecturers">
        {this.props.instructor.map((lecturer) => (
          <Lecture key={lecturer.id} lecturer={lecturer} handleRemoveLecture={}>
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
