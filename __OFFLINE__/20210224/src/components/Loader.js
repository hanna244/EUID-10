import styled from 'styled-components'
import { ReactComponent as Spinner } from '../assets/spinner.svg'

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Figcaption = styled.figcaption`
  margin-top: 10px;
`

export default function Loader({ loadingMessage, ...restProps }) {
  return (
    <Figure>
      <Spinner {...restProps} />
      <Figcaption>{loadingMessage ?? '로딩 중입니다...'}</Figcaption>
    </Figure>
  )
}
