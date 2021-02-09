import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import Lecture from './Lecture'

// 오류 시 출력되는 내용
const renderErrorJSX = () => (
  <div className="error-boundary">
    <h2>오류가 발생되었습니다.</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt
      vitae dolore laborum praesentium magni tempore doloribus similique
      architecto consectetur!
    </p>
  </div>
)

class Lecturer extends Component {
  static propsTypes = {
    instructor: PropsTypes.array,
  }
  static defaultProps = {
    instructor: [],
  }

  // 오류 감지하는 상태
  state = {
    hasError: false,
  }

  // 오류가 발생하면 상태를 true로 변경
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    }
  }

  render() {
    // 오류시 오류 메세지 출력되도록 조건문 처리
    if (this.state.hasError) {
      return renderErrorJSX()
    }
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

  // info 내부의 컴포넌트의 스택을 출력해 볼 수 있다.
  componentDidCatch(error, info) {
    console.log(info.componentStack)
  }
}

export default Lecturer
