import React from 'react'
import styled from 'styled-components'
import { signInWithGoogle, signOut } from './service/firebase'

const Container = styled.div`
  margin: 40px;
`
const Button = styled.button`
  border: 1px solid ${({ color }) => color ?? '#434343'};
  padding: 0.64em 1.47em;
  background: ${({ background }) => background ?? '#91182c'};
  color: ${({ color }) => color ?? '#fff'};

  &:hover {
    background: ${({ hoverColor }) => hoverColor ?? '#7a575d'};
  }
`

function App() {
  const [currentUser, setCurrentUser] = React.useState(null)
  const [hasError, setHasError] = React.useState(null)

  // 로그인 함수
  const logIn = () => {
    signInWithGoogle()
      .then(({ credential, user }) => {
        setCurrentUser({
          accessToken: credential.accessToken,
          ...user.providerData[0],
        })
      })
      .catch((error) => console.log(error.message))
  }

  // 로그아웃 함수
  const logOut = () => {
    signOut().then(() => {
      console.log('로그아웃')
    })
    setCurrentUser(null)
  }

  // if (hasError) {
  //   return <div role="alert">{hasError.message}</div>
  // }

  return (
    <Container className="App">
      <header className="App-header">
        <h1>Google Auth Provider 사용하기</h1>
        {currentUser ? (
          <p>{currentUser.displayName}님이 입장하셨습니다.</p>
        ) : (
          <p>로그인이 필요한 서비스입니다.</p>
        )}
        {!currentUser ? (
          <Button type="button" onClick={logIn}>
            로그인
          </Button>
        ) : (
          <Button type="button" onClick={logOut} color="#ebf4dc">
            로그아웃
          </Button>
        )}
      </header>
    </Container>
  )
}

export default App
