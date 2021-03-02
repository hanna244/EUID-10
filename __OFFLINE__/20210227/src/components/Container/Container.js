import styled from 'styled-components/macro'

// Sass 믹스인 처럼 재사용할 수 있는 믹스인이다.
const Container = styled.div`
  max-width: ${({ max }) => max ?? '1280px'};
  min-width: ${({ min }) => min ?? '480px'};
  width: 100%;
  margin: 0 auto;
`

export default Container
