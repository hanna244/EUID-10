import React from 'react'
import Container from '../Container'
import Parent from '../Parent'

// GrandParent 컴포넌트
const GrandParent = ({ parentCount = 1, childrenCount = 1 }) => {
  const parentArray = Array(parentCount)
    .fill(null)
    .map((item, index) => 'parent' + index)

  // parentArray → parent1, parent2, parent3, ...

  return (
    // 루트요소 안의 값으로 넣는다.
    <Container className="grand-parent" style={{ marginTop: 60 }}>
      {parentArray.map((key) => {
        return <Parent key={key} id={key} childrenCount={childrenCount} />
      })}
    </Container>
  )
}

export default GrandParent
