import React from 'react'
// 네임으로 내보낼 때는 중괄호 잊지 않기
import { AppContext } from '../App'

const Lecture = ({ lecturer, children }) => (
  <AppContext.Consumer>
    {/* 받아오는 값 매개변수 설정해주기 */}
    {(removeLecture) => {
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
    }}
  </AppContext.Consumer>
)

export default Lecture
