import styled from 'styled-components'

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  margin: 40px;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
`

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  border: 1px solid ${({ color }) => color ?? '#434241'};
  padding: 0.64em 1.47em;
  background: ${({ background }) => background ?? '#fefefe'};
  color: ${({ color }) => color ?? '#434241'};

  &:hover {
    background: ${({ hoverColor }) => hoverColor ?? '#dadada'};
  }
`

export const Headline = styled.h1`
  font-size: 2.2rem;
  color: #182bd6;
`
