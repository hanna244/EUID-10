import styled from 'styled-components'

// -------------------------------------------------------
// 스타일 컴포넌트

const Print = styled.output`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(2px);
  font-weight: bold;
  text-align: center;
`

Print.displayName = 'Print'

export default Print
