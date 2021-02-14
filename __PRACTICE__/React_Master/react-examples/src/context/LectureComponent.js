import React from 'react'

// 2개의 멤버를 가지고 있는 객체이다.
export const lectureContext = {
  lecturers: [],
  removeLecture: () => {},
}

export default React.createContext(lectureContext)
