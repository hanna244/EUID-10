import React from 'react'

// onParentCallback 속성을 받아 옴
const Lecture = ({ lecturer, children, handleRemoveLecturer }) => (
  <li className="lecturers">
    <a href={lecturer.facebook} rel="noreferer nopener">
      {children}
    </a>
    <button type="button" onClick={() => handleRemoveLecturer(lecturer.id)}>
      제거
    </button>
  </li>
)

export default Lecture
