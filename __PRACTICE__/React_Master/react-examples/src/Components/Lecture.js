import React from 'react'

// onParentCallback 속성을 받아 옴
const Lecture = ({ lecturer, children, parentComponentClick }) => (
  <li className="lecturers">
    <a href={lecturer.facebook} rel="noreferer nopener">
      {children}
    </a>
    <button onClick={parentComponentClick}>제거</button>
  </li>
)

export default Lecture
