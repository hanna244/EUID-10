import React, { Component } from 'react'
import Lecturer from './Lecturers'

const Lecture = ({ lecturer, children, onParentCallback }) => (
  <li className="lecturers">
    <a href={lecturer.facebook} rel="noreferer nopener">
      {children}
    </a>
    <button
      type="button"
      className="button-remove-lecturer"
      onClick={handleRemoveLecture}
    >
      제거
    </button>
  </li>
)

export default Lecture
