import React from 'react'
import Container from '../Container'
import Child from '../Child'

// Parent 컴포넌트
const Parent = ({ id, childrenCount = 2 } = {}) => {
  // const uuid = id.replace(/parent-/g, "");
  const uuid = id.toUpperCase()
  const childrenArray = Array(childrenCount)
    .fill(null)
    .map(() => uuid)
  return (
    <Container className="parent">
      {childrenArray.map((child, index) => {
        const message = `${child} → CHILD-${index}`
        console.log(message)
        return (
          <Child key={index} message={message}>
            {message}
          </Child>
        )
      })}
    </Container>
  )
}

export default Parent
