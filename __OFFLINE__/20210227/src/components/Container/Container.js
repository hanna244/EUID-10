import styled from 'styled-components/macro'

const Container = styled.div`
  max-width: ${({ max }) => max ?? '1280px'};
  min-width: ${({ min }) => min ?? '480px'};
  width: 100%;
  margin: 0 auto;
`

export default Container
