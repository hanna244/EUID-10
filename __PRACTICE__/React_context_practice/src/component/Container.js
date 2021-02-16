import styled from 'styled-components'

// -------------------------------------------------------
// 스타일 컴포넌트

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  border: 3px solid #f5cd79;

  &.grand-parent {
    background: #596275;
  }

  &.parent {
    background: #38ada9;
  }
`

Container.displayName = 'Container'

export default Container
